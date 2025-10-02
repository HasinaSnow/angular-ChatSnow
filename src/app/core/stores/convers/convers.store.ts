import { patchState, signalStore, withComputed, withMethods } from "@ngrx/signals";
import { WithEntityCrud } from "../with-entity-crud.store";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { computed, inject } from "@angular/core";
import { ProfileStore } from "../profile/profile.store";
import { UserStore } from "../user/user.store";
import { Subscription } from "rxjs";
import { ConversSocketGateway } from "../../ports/convers-soket.gateway";
import { setEntity } from "@ngrx/signals/entities";
import { TUniqId } from "../../../shared/types/uniq-id.type";

export const ConversStore = signalStore(
    WithEntityCrud<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>>(ConversGateway),
    withComputed((
        store,
        userStore = inject(UserStore),
        profileStore = inject(ProfileStore)
    ) => ({
        conversList: computed(() => {
            const myId = profileStore.profile()?.id
            if(myId) {
                const users = userStore.entities()
                return store.entities().map((convers) => ({
                    ...convers,
                    lastMsg: {
                        ...convers.lastMsg,
                        authorName: convers.lastMsg.authorId === myId ? 'You' : convers.lastMsg.authorName
                    },
                    name: convers.name
                        ?? convers.type === 'group'
                            ? convers.participants.filter(p => p.idUser !== myId).map(p => p.name).join(', ')
                            : convers.participants.filter(p => p.idUser !== myId).map(p => p.name).join(''),
                    isOnline: users
                        .filter(user => user.isOnline)
                        .map(user => user.id)
                        .some(idUser => convers.participants
                            .map(p => p.idUser)
                            .includes(idUser)
                        ),
                    unreadCount: convers.participants.find(p => p.idUser === myId)?.unreadCount as number
                })).sort((a, b) => {
                    const dateA = (a.updatedAt ?? a.createdAt).getTime()
                    const dateB = (b.updatedAt ?? b.createdAt).getTime()
                    return dateB - dateA
                })
            } return []
        }),
        streamUsers: computed(() => {
            const myId = profileStore.profile()?.id
            const users = userStore.entities().filter(user => user.id !== myId)
            const usersInPrivateConvers = store.entities()
                .filter(convers => convers.type === 'private')
                .map(convers => {
                    const p = convers.participants.find(p => p.idUser !== myId)
                    return {
                        id: p?.idUser as string,
                        name: p?.name as string,
                        urlAvatar: p?.urlAvatar as string,
                        isOnline: false
                    }
                })

            const streamUsers = users.map(user => ({
                id: user.id,
                name: user.name,
                urlAvatar: user.urlAvatar,
                isOnline: user.isOnline
            }))

            return [...new Map([...usersInPrivateConvers, ...streamUsers].map(user => [user.id, user])).values()]
        })
    })),
    withMethods((
        store,
        conversSocketGateway = inject(ConversSocketGateway)
    ) => {
        let sub: Subscription

        const listenUpdateConvers = () => {
            sub = conversSocketGateway.on().subscribe(convers => {
                patchState(store, setEntity(convers))
            })
        }

        const emitUnreadCountTo0 = (convers: ConversEntity, idUser: TUniqId) => {
            // mise à jour immediat de la list côté store (front)
            const entity = store.entities().find(c => c.id === convers.id)
            if(!entity) return
            const participants = entity.participants.map(p => {
                if(p.idUser === idUser) p.unreadCount = 0
                return p
            })
            entity.participants = participants
            patchState(store, setEntity(entity))

            // emettre via websocket la mise à jour
            conversSocketGateway.emit('unread-count-to-0', { convers: entity, idUser})
        }

        const unsubscribe = () => {
            sub.unsubscribe()
        }

        return  {listenUpdateConvers, emitUnreadCountTo0, unsubscribe}
    })
)