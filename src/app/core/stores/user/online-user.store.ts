import { patchState, signalStore, withHooks, withMethods, withState } from "@ngrx/signals";
import { OnlineUserEntity } from "../../entities/online-user.entity";
import { inject } from "@angular/core";
import { OnlineUserGateway } from "../../ports/online-user.gateway";
import { Subscription } from "rxjs";

export const OnlineUserStore = signalStore(
    withState({
        onlineUsers: [] as OnlineUserEntity[]
    }),
    withMethods((store, onlinUserGateway = inject(OnlineUserGateway)) => {
        let sub: Subscription
        const listenOnlineUsers = () => {
            console.log("Listen online users")
            sub = onlinUserGateway.on().subscribe(onlineUsers => {
                console.log("online users change")
                patchState(store, {onlineUsers})
            })
        }
        const unsubscribe = () => {
            console.log("Unsubscribe online users")
            sub.unsubscribe()
        }

        return {
            listenOnlineUsers,
            unsubscribe
        }

    }),
    withHooks({
        onInit: ({listenOnlineUsers}) => {
            listenOnlineUsers()
        },
    })
)