import { Gateway } from "../ports/gateway";
import { patchState, signalStoreFeature, withMethods } from "@ngrx/signals";
import { removeEntity, setAllEntities, setEntities, setEntity, withEntities } from "@ngrx/signals/entities";
import { rxMethod } from "@ngrx/signals/rxjs-interop";
import { exhaustMap, map, of, pipe, switchMap, tap } from "rxjs";
import { ProviderToken, inject } from "@angular/core";
import { TUniqId } from "../../shared/types/uniq-id.type";
import { WithDataLoaded } from "./with-data-loaded.store";

export function WithEntityCrud<entity extends {id: TUniqId}, dataCreate, dataUpdate>(service: ProviderToken<Gateway<entity, dataCreate, dataUpdate>>) {
    return signalStoreFeature(
        withEntities<entity>(),
        WithDataLoaded(),
        withMethods((store, gateway = inject(service) as Gateway<entity, dataCreate, dataUpdate>) => ({
            patchEntity: (entities: entity[]) => patchState(store, setEntities<entity>(entities)),
            load: rxMethod<void>(
                pipe(
                    switchMap(() => gateway.retrieveAll()),
                    tap(entities => {
                        patchState(store, setAllEntities<entity>(entities), {dataLoaded: true})
                    })
                )
            ),
            getOne: (id: TUniqId) => {
                return of(id).pipe(
                    switchMap(id => {
                        const exists = store.entities().find(element => element.id === id)
                        return exists ? of(exists) : gateway.retrieveOne(id).pipe(
                            tap((result) => { if(result) patchState(store, setEntity(result)) })
                        )
                    }),
                )
            },
            addNew: rxMethod<dataCreate>(
                pipe(
                    exhaustMap(dataCreate => gateway.addNew(dataCreate as dataCreate)),
                    tap(newEntity => {
                        patchState(store, setEntity<entity>(newEntity))
                    })
                )
            ),
            edit: rxMethod<{data: dataUpdate, id: TUniqId}>(
                pipe(
                    exhaustMap(({data, id}) => gateway.update(data as dataUpdate, id)),
                    tap(updatedEntity => {
                        patchState(store, setEntity<entity>(updatedEntity))
                    })
                )
            ),
            remove: rxMethod<TUniqId>(
                pipe(
                    exhaustMap(id => gateway.remove(id).pipe(map(() => id))),
                    tap((id) => {
                        const entities = store.entities().filter(entity => entity.id == id)
                        patchState(store, removeEntity(id))
                    })
                )
            )
        })),
    )
}