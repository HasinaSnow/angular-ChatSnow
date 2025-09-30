import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ConversEntity, IConversPrtcipant } from "../../entities/convers.entity";
import { MsgEntity } from "../../entities/msg.entity";
import { computed, inject } from "@angular/core";
import { ConversStore } from "./convers.store";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ProfileStore } from "../profile/profile.store";
import { IItemMsg } from "../../../shared/components/ui/item-msg.component";
import { pipe, Subscription, switchMap, tap } from "rxjs";
import { MsgSocketGateway } from "../../ports/msg-socket.gateway";
import { MsgGateway } from "../../ports/msg.gateway";
import { rxMethod } from "@ngrx/signals/rxjs-interop";

export const OneConversStore = signalStore(
    withState({
        oneConvers: null as ConversEntity|null,
        msgList: [] as MsgEntity[]
    }),
    withComputed((
        store,
        profileStore = inject(ProfileStore),
    ) => ({
        msgItems: computed(() => {
            const myId = profileStore.profile()?.id
            const oneConvers = store.oneConvers()
            const seenBy = (ids: TUniqId[]) => oneConvers
                ? ids.map(seen => {
                    const p = oneConvers.participants.find(c => c.idUser === seen)
                    const exP = oneConvers.exParticipants.find(c => c.idUser === seen) as IConversPrtcipant
                    return p ?? exP
                })
                : []
            const author = (id: TUniqId) => {
                const p = oneConvers?.participants.find(c => c.idUser === id)
                const exP = oneConvers?.exParticipants.find(c => c.idUser === id) as IConversPrtcipant
                return p ?? exP
            }

            return store.msgList()
                .map<IItemMsg>(m => {
                    const replyToMsg = m.replyToMsg
                    const replyToMsgAuthorName = oneConvers?.participants.find(p => p.idUser === m.replyToMsg?.author)?.name
                        ?? oneConvers?.exParticipants.find(p => p.idUser === m.replyToMsg?.author)?.name
                    if(replyToMsg) replyToMsg.author = replyToMsgAuthorName ?? 'Unknoun member'
                    return {
                        id: m.id,
                        idConvers: m.idConvers,
                        isReceived: m.author !== myId,
                        content: m.content,
                        reactions: [],
                        withInteraction: true,
                        type: m.type,
                        replyToMsg: replyToMsg,
                        seenBy: seenBy(m.seenBy),
                        author: author(m.author),
                        attachments: m.attachments,
                        timestamp: m.timestamp
                    }
                })
                .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
        })

    })),
    withMethods((
        store,
        conversStore = inject(ConversStore),
        profileStore = inject(ProfileStore),
        msgGateway = inject(MsgGateway),
        msgSocketGateway = inject(MsgSocketGateway)
    ) => {
        let sub: Subscription

        const patchOneConvers = rxMethod<TUniqId>(pipe(
            switchMap(idConvers => conversStore.getOne(idConvers)),
            tap(convers => {
                const myId = profileStore.profile()?.id
                const oneConvers = {
                    ...convers,
                    name: convers?.name
                        ?? convers?.type === 'group'
                            ? convers?.participants.filter(p => p.idUser !== myId).map(p => p.name).join(', ')
                            : convers?.participants.filter(p => p.idUser !== myId).map(p => p.name).join(''),
                    participants: convers?.participants.map(p => {
                        if(p.idUser === myId) {
                            p.name = 'Vous'
                            return p
                        } else return p}),
                    unreadCount: convers?.participants.find(p => p.idUser === myId)?.unreadCount as number
                } as ConversEntity
                patchState(store, {oneConvers})
            })
        ))

        // const patchOneConvers = (idConvers: TUniqId) => {
            // conversStore.getOne(idConvers).subscribe({
            //     next: (convers) => {
            //         const myId = profileStore.profile()?.id
            //         const oneConvers = {
            //             ...convers,
            //             name: convers?.name
            //                 ?? convers?.type === 'group'
            //                     ? convers?.participants.filter(p => p.idUser !== myId).map(p => p.name).join(', ')
            //                     : convers?.participants.filter(p => p.idUser !== myId).map(p => p.name).join(''),
            //             participants: convers?.participants.map(p => {
            //                 if(p.idUser === myId) {
            //                     p.name = 'Vous'
            //                     return p
            //                 } else return p}),
            //             unreadCount: convers?.participants.find(p => p.idUser === myId)?.unreadCount as number
            //         } as ConversEntity
            //         patchState(store, {oneConvers})
            //     },
            //     error: (result) => {
            //         console.log('patch error onConvers : ', result)
            //         // patchState(store, {oneConvers: result})
            //     }
            // })
        // }

        const loadMsgList = rxMethod<TUniqId>(
            pipe(
                switchMap((idConvers) => msgGateway.retrieveByIdConvers(idConvers)),
                tap(msgs => {
                    console.log('msgs list loaded =>', msgs.length)
                    patchState(store, {msgList: msgs})
                })
            )
        )

        // const patchMsgList = (idConvers: string) => 
        //     {
        //     if(idConvers) msgGateway.getMsgsByIdConvers(idConvers)
        //         .subscribe(value => { patchState(store, {msgList: value}) })
        // }

        const listenMsgInOneConvers = () => {
            sub = msgSocketGateway.on().subscribe(msg => {
                if(msg.idConvers === store.oneConvers()?.id) {
                    let msgList = store.msgList()
                    msgList.shift()
                    patchState(store, {msgList: [...msgList, msg]})
                }
            })
        }

        const unsubscribe = () => {
            sub.unsubscribe()
        }

        return  {patchOneConvers, loadMsgList, listenMsgInOneConvers, unsubscribe}
    })
)