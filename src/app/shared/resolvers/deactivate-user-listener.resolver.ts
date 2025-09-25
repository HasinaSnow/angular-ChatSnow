import { inject } from "@angular/core"
import { UserStore } from "../../core/stores/user/user.store"

export const DeactivateUserListener = () => {
    console.log('Deactivate user listener...')
    const userStore = inject(UserStore)
    userStore.unsubscribe()
}