import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { OnlineUserEntity } from "../../entities/online-user.entity";
import { inject } from "@angular/core";
import { FakeSocketService } from "../../services/fake-socket.service";

export const OnlineUserStore = signalStore(
    withState({
        OnlineUser: [] as OnlineUserEntity[]
    }),
    withMethods((store) => ({
        patchOnlineUser: (users: OnlineUserEntity[]) => {
            patchState(store, {OnlineUser: users})
        },
    })),
    withHooks({
        onInit: () => {}
    })
)