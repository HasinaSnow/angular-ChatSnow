import { inject, Injectable } from "@angular/core";
import { OnlineUserStore } from "../stores/user/online-user.store";
import { _FAKE_DATA_USERS_ONLINE } from "../data/fake.data";
import { Subscription } from "rxjs";

@Injectable()
export class FakeSocketService {
    onlineUserStore = inject(OnlineUserStore)
    sub!: Subscription

    patchOnlineUsers() {
        this.sub = _FAKE_DATA_USERS_ONLINE.subscribe(newOnline => {
            this.onlineUserStore.patchOnlineUser(newOnline)
        })
    }

    unsubscribeStream() {
        return this.sub.unsubscribe()
    }
}