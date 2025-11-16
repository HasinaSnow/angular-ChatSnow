import { inject } from "@angular/core"
import { UserStore } from "../../core/stores/user/user.store"
import { of } from "rxjs"

export const ActivateUserListener = () => {
    inject(UserStore).listenUpdatedUsers()
    return of(null)
}

export const DeactivateUserListener = () => {
    inject(UserStore).unsubscribe()
    return of(null)
}