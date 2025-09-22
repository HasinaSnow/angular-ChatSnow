import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { WithEntityCrud } from "../with-entity-crud.store";
import { ConversEntity } from "../../entities/convers.entity";
import { ConversGateway } from "../../ports/convers.gateway";
import { computed, inject } from "@angular/core";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { ProfileStore } from "../profile/profile.store";
import { UserStore } from "../user/user.store";
import { UserEntity } from "../../entities/user.entity";

export const ConversStore = signalStore(
    WithEntityCrud<ConversEntity, Partial<ConversEntity>, Partial<ConversEntity>>(ConversGateway),
    withState({onlineIds: [] as TUniqId[]}),
    withMethods((store) => ({
        PatchOnlineIds: (ids: TUniqId[]) => {
            patchState(store, {onlineIds: ids})
        },
    })),
    withComputed((store, userStore = inject(UserStore)) => ({
        onlineConvers: computed(() => {
            const myProfile = userStore.myProfile() as UserEntity
            return store.entities().filter(convers => convers.participants
                .filter(participant => participant !== myProfile.id)
                .some(participant => store.onlineIds().includes(participant)))
        }),
        conversList: computed(() => {
            return store.entities().map((entity) => ({
                ...entity, isOnline: store.onlineIds().includes(entity.id)
            }))
        })
    }))
)