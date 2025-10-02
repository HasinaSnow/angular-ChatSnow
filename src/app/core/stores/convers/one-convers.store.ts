import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { ConversEntity, IConversLastMsg, IConversPrtcipant } from "../../entities/convers.entity";
import { MsgEntity } from "../../entities/msg.entity";
import { computed, inject } from "@angular/core";
import { ConversStore } from "./convers.store";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ProfileStore } from "../profile/profile.store";
import { IItemMsg } from "../../../shared/components/ui/item-msg.component";
import { exhaustMap, last, of, pipe, Subscription, switchMap, tap } from "rxjs";
import { MsgSocketGateway } from "../../ports/msg-socket.gateway";
import { MsgGateway } from "../../ports/msg.gateway";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { EmojiData } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { IMsgReaction } from "../../../shared/components/reactions.component";

export const OneConversStore = signalStore(
    withState({
        oneConvers: null as ConversEntity|null,
        msgList: [] as MsgEntity[]
    }),
    withComputed((
        store,
        profileStore = inject(ProfileStore),
        conversStore = inject(ConversStore)
    ) => {
        const msgItems = computed(() => {
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
                const p = oneConvers?.participants.find(participant => participant.idUser === id)
                const exP = oneConvers?.exParticipants.find(participant => participant.idUser === id) as IConversPrtcipant
                if(id === myId) {
                    p ? p.name = 'You' : exP.name = 'You'
                }
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
                        reactions: m.emojiReactions.map<IMsgReaction>(r => ({
                            author: {id: r.author, name: author(r.author).name, imgUrl: author(r.author).urlAvatar ?? ''},
                            emoji: r.emoji,
                            removable: r.author === myId
                        })),
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

        const conversMsgHeader = computed(() => {
            const myId = profileStore.profile()?.id
            const oneConvers = store.oneConvers()
            if(!oneConvers) return null
            let entities = conversStore.entities().find(c => c.id === oneConvers.id)
            if(!entities) return null
            return {
                ...oneConvers,
                name: entities?.name
                    ?? entities?.type === 'group'
                        ? entities?.participants.filter(p => p.idUser !== myId).map(p => p.name).join(', ') ?? '__errorName'
                        : entities?.participants.filter(p => p.idUser !== myId).map(p => p.name).join('') ?? '__errorName',
                participants: entities?.participants.map<IConversPrtcipant>(p => {
                    if(p.idUser === myId) {
                        const myPseudo = 'You'
                        // p.name = 'petasse2'
                        return {...p, name: myPseudo}
                    } else return p}) ?? [],
            }
        })

        const oneConversMsg = computed(() => {
            const myId = profileStore.profile()?.id
            const oneConvers = store.oneConvers()
            if(oneConvers) {
                const oneConversMsg: ConversEntity = {
                    ...oneConvers,
                    name: oneConvers?.name
                        ?? oneConvers?.type === 'group'
                            ? oneConvers?.participants.filter(p => p.idUser !== myId).map(p => p.name).join(', ') ?? '__errorName'
                            : oneConvers?.participants.filter(p => p.idUser !== myId).map(p => p.name).join('') ?? '__errorName',
                    participants: oneConvers?.participants.map<IConversPrtcipant>(p => {
                        if(p.idUser === myId) {
                            return {...p, name: 'You'}
                        } else return p}) ?? [],
                }
                return oneConversMsg
            }
            return oneConvers
        })

        return {msgItems, oneConversMsg, conversMsgHeader}

    }),
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
            tap(oneConvers => {
                patchState(store, {oneConvers})
            })
        ))

        const loadMsgList = rxMethod<TUniqId>(
            pipe(
                switchMap((idConvers) => msgGateway.retrieveByIdConvers(idConvers)),
                tap(msgs => {
                    patchState(store, {msgList: msgs})
                })
            )
        )

        const addMsg = rxMethod<string>(
            pipe(
                exhaustMap(msgContent => {
                    const myId = profileStore.profile()?.id
                    const newMsgEntity: Partial<MsgEntity> = {
                        type: 'text',
                        author: myId,
                        idConvers: store.oneConvers()?.id,
                        replyToMsg: null,
                        content: msgContent.trim(),
                        timestamp: new Date()
                    }
                    return msgGateway.addNew(newMsgEntity)
                }),
                tap(newMsg => {
                    const oneConvers = store.oneConvers()
                    if(oneConvers) {
                        const lastMsg: IConversLastMsg = {
                            idMsg: newMsg.id,
                            content: newMsg.content,
                            authorName: oneConvers?.participants.find(p => p.idUser === newMsg.author)?.name ?? '_nameError',
                            authorId: newMsg.author,
                            createdAt: newMsg.timestamp
                        }
                        const updatedConvers: ConversEntity = {...oneConvers, lastMsg, updatedAt: newMsg.timestamp}
                        console.log('msg[added] and convers lastMsg updated')
                        conversStore.patchOneConvers(updatedConvers)
                        patchState(store, {msgList: [...store.msgList(), newMsg]})
                    }
                })
            )
        )

        const addReaction = rxMethod<{id: TUniqId ,reaction: string|EmojiData}>(
            pipe(
                switchMap(creds => {
                    const lastMsg = store.msgList().find(msg => msg.id === creds.id)
                    const myId = profileStore.profile()?.id
                    if(lastMsg && myId) {
                        const toUpdated: MsgEntity = {
                            ...lastMsg,
                            emojiReactions: lastMsg.emojiReactions.find(r => r.author === myId)
                                ? lastMsg.emojiReactions.map(r => r.author === myId ? {emoji: creds.reaction, author: myId} : r)
                                : [...lastMsg.emojiReactions, {emoji: creds.reaction, author: myId}]
                        }
                        return msgGateway.update(toUpdated, creds.id)
                    }
                    return of(null)
                }),
                tap(msg => {
                    if(msg) {
                        const msgList = store.msgList()
                        const updatedMsglist = msgList.map(m => m.id === msg.id ? msg : m)
                        patchState(store, {msgList: updatedMsglist})
                    }
                })
            )
        )

        const removeReaction = rxMethod<TUniqId>(
            pipe(
                switchMap(idMsg => {
                    const lastMsg = store.msgList().find(msg => msg.id === idMsg)
                    const myId = profileStore.profile()?.id
                    if(lastMsg && myId) {
                        const toUpdated: MsgEntity = {
                            ...lastMsg,
                            emojiReactions: lastMsg.emojiReactions.filter(r => r.author !== myId)
                        }
                        return msgGateway.update(toUpdated, idMsg)
                    }
                    return of(null)
                }),
                tap(msg => {
                    if(msg) {
                        const msgList = store.msgList()
                        const updatedMsglist = msgList.map(m => m.id === msg.id ? msg : m)
                        patchState(store, {msgList: updatedMsglist})
                    }
                })
            )
        )

        const listenMsgInOneConvers = () => {
            sub = msgSocketGateway.on().subscribe(msg => {
                const oneConvers = store.oneConvers()
                if(oneConvers && msg.idConvers === oneConvers.id) {
                    // mettre à jour le store
                    let msgList = store.msgList()
                    msgList.shift()
                    patchState(store, {msgList: [...msgList, msg]})

                    // mettre à jour le unreadCount
                    const myId = profileStore.profile()?.id
                    if(myId) conversStore.emitUnreadCountTo0(oneConvers, myId)
                }
            })
        }

        const unsubscribe = () => {
            sub.unsubscribe()
        }

        return  {patchOneConvers, loadMsgList, addMsg, addReaction, removeReaction, listenMsgInOneConvers, unsubscribe}
    })
)