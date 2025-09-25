import { inject } from "@angular/core"
import { UserStore } from "../../core/stores/user/user.store"

export const ActivateUserListener = () => {
    const userStore = inject(UserStore)
    userStore.listenUpdatedUsers()
}