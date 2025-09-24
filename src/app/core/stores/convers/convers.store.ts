import { signalStore, withComputed, withHooks, withMethods, withState } from "@ngrx/signals";
import { WithEntityCrud } from "../with-entity-crud.store";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { computed, inject } from "@angular/core";
import { ProfileStore } from "../profile/profile.store";
import { OnlineUserStore } from "../user/online-user.store";

export const ConversStore = signalStore(
    WithEntityCrud<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>>(ConversGateway),
    withMethods((store) => ({})),
    withComputed((
        store,
        onlineStore = inject(OnlineUserStore),
        profileStore = inject(ProfileStore)
    ) => ({
        conversList: computed(() => {
            const myId = profileStore.profile()?.id
            if(myId) {
                const onlines = onlineStore.OnlineUser()
                return store.entities().map((convers) => ({
                    ...convers,
                    name: convers.name
                        ?? convers.type == 'group' 
                            ? convers.participants.map(p => p.name).join(', ')
                            : convers.participants.find(p => p.idUser != myId)?.name as string,
                    isOnline: convers.participants
                        .map(p => p.idUser)
                        .filter(p => p !== myId)
                        .some(p => onlines
                            .map(online => online.id)
                            .includes(p)
                        ),
                    unreadCount: convers.participants.find(p => p.idUser === myId)?.unreadCount as number
                }))
            } return []
        }),
    })),
    withHooks({
        onInit: ({load}) => {
            load()
        }
    })
)