import { inject } from "@angular/core"
import { ProfileStore } from "../../core/stores/profile/profile.store"
import { of } from "rxjs"

export const LoadProfile = () => {
    inject(ProfileStore).loadProfile()
    return of(null)
}