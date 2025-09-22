import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { UserEntity } from "../../entities/user.entity";
import { UserGateway } from "../../ports/user.gateway";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { inject } from "@angular/core";
import { debounceTime, pipe, switchMap, tap } from "rxjs";

export const UserStore = signalStore(
    withState({
        searchedUsers: [] as UserEntity[],
        oneUser: null as UserEntity|null,
        myProfile: null as UserEntity|null
    }),
    withMethods((store, userGateway = inject(UserGateway)) => ({
        patchProfile: (profile: UserEntity) => patchState(store, {myProfile: profile}),
        searchByName: rxMethod<string>(
            pipe(
                debounceTime(400),
                switchMap((param) => userGateway.searchByName(param)),
                tap(searchedUsers => {
                    patchState(store, {searchedUsers})
                })
            )
        ),
        searchById: rxMethod<string>(
            pipe(
                switchMap((id) => userGateway.retrieveOne(id)),
                tap(oneUser => {
                    patchState(store, {oneUser})
                })
            )
        )
    }))
)