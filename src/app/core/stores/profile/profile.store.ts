import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { UserEntity } from "../../entities/user.entity";
import { inject } from "@angular/core";
import { AuthService } from "../../../shared/auth/auth.service";


export const ProfileStore = signalStore(
    withState({
        profile: null as UserEntity|null
    }),
    withMethods((store, authService = inject(AuthService)) => ({
        patchProfile: (profile: UserEntity) => { patchState(store, {profile}) },
        loadProfile: () => { patchState(store, {profile: authService.userAuth()}) }
    })),
    withHooks({
        onInit: ({loadProfile}) => {
            console.log('onInit profile store => loadProfile')
            loadProfile()
        }
    })
)