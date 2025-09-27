import { inject } from "@angular/core"
import { UserStore } from "../../core/stores/user/user.store"

export const ActivateUserListener = () => {
    inject(UserStore).listenUpdatedUsers()
}

export const DeactivateUserListener = () => {
    console.log('Deactivate user listener...')
    inject(UserStore).unsubscribe()
}