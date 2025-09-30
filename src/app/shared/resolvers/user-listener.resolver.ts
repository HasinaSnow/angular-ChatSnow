import { inject } from "@angular/core"
import { UserStore } from "../../core/stores/user/user.store"
import { of } from "rxjs"

export const ActivateUserListener = () => {
    console.log('Activate user listener...')
    inject(UserStore).listenUpdatedUsers()
    return of(null)
}

export const DeactivateUserListener = () => {
    console.log('Deactivate user listener...')
    inject(UserStore).unsubscribe()
    return of(null)
}