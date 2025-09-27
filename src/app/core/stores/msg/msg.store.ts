import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { WithEntityCrud } from "../with-entity-crud.store";
import { MsgEntity } from "../../entities/msg.entity";
import { MsgGateway } from "../../ports/msg.gateway";
import { inject } from "@angular/core";
import { Observable, of, Subscription, switchMap, tap } from "rxjs";
import { TUniqId } from "../../../shared/types/uniq-id.type";
import { setEntities, setEntity } from "@ngrx/signals/entities";
import { MsgSocketGateway } from "../../ports/msg-socket.gateway";

export const MsgStore = signalStore(
    WithEntityCrud<MsgEntity, Partial<MsgEntity>, Partial<MsgEntity>>(MsgGateway),
    withState({
        conversIds: [] as TUniqId[]
    }),
    withMethods((
        store,
        msgGateway = inject(MsgGateway),
        msgSocketGateway = inject(MsgSocketGateway)
    ) => {
        let sub: Subscription

        const getMsgsByIdConvers = (idConvers: TUniqId): Observable<MsgEntity[]> => {
                return of(idConvers).pipe(
                    switchMap((idConvers) => store.conversIds().includes(idConvers)
                        ? of(store.entities().filter(msg => msg.idConvers === idConvers))
                        : msgGateway.retrieveByIdConvers(idConvers)
                    ),
                    tap(result => {
                        patchState(store, {conversIds: [...store.conversIds(), result[0].idConvers]})
                        patchState(store, setEntities(result))
                    })
                )
        }

        const listenUpdatedMsgs = () => {
            sub = msgSocketGateway.on().subscribe(msg => {
                patchState(store, setEntity(msg))
            })
        }

        const unsubscribe = () => {
            sub.unsubscribe()
        }

        return {getMsgsByIdConvers, listenUpdatedMsgs, unsubscribe}
    })
)