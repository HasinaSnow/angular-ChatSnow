import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { UserEntity } from "../../entities/user.entity";
import { UserGateway } from "../../ports/user.gateway";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { inject } from "@angular/core";
import { debounceTime, pipe, Subscription, switchMap, tap } from "rxjs";
import { WithEntityCrud } from "../with-entity-crud.store";
import { UserSocketGateway } from "../../ports/online-user.gateway";
import { setEntities } from "@ngrx/signals/entities";

export const UserStore = signalStore(
    WithEntityCrud<UserEntity, Partial<UserEntity>, Partial<UserEntity>>(UserGateway),
    withState({
        searchedUsers: [] as UserEntity[],
        oneUser: null as UserEntity|null,
        myProfile: null as UserEntity|null
    }),
    withMethods((
        store,
        userGateway = inject(UserGateway),
        userSocketGateway = inject(UserSocketGateway)
    ) => {
        let sub: Subscription

        const searchByName = rxMethod<string>(
            pipe(
                debounceTime(400),
                switchMap((param) => userGateway.searchByName(param)),
                tap(searchedUsers => {
                    patchState(store, {searchedUsers})
                })
            )
        )

        const searchById = rxMethod<string>(
            pipe(
                switchMap((id) => userGateway.retrieveOne(id)),
                tap(oneUser => {
                    patchState(store, {oneUser})
                })
            )
        )

        const listenUpdatedUsers = () => {
            console.log("Listen updated users")
            sub = userSocketGateway.on().subscribe(users => {
                console.log("new updated users push")
                patchState(store, setEntities(users))
            })
        }

        const unsubscribe = () => {
            console.log("Unsubscribe online users")
            sub.unsubscribe()
        }

        return {searchById, searchByName, listenUpdatedUsers, unsubscribe}
    })
)