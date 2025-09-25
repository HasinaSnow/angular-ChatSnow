import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { WithEntityCrud } from "../with-entity-crud.store";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { computed, inject } from "@angular/core";
import { ProfileStore } from "../profile/profile.store";
import { UserStore } from "../user/user.store";

export const ConversStore = signalStore(
    WithEntityCrud<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>>(ConversGateway),
    withMethods((store) => ({})),
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
                    name: convers.name
                        ?? convers.type == 'group' 
                            ? convers.participants.map(p => p.name).join(', ')
                            : convers.participants.find(p => p.idUser != myId)?.name as string,
                    isOnline: users
                        .filter(user => user.isOnline)
                        .map(user => user.id)
                        .some(idUser => convers.participants
                            .map(p => p.idUser)
                            .includes(idUser)
                        ),
                    unreadCount: convers.participants.find(p => p.idUser === myId)?.unreadCount as number
                }))
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
    withHooks({
        onInit: ({load}) => {
            load()
        }
    })
)