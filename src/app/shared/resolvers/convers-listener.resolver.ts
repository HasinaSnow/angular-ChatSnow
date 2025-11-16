import { inject } from "@angular/core"
import { ConversStore } from "../../core/stores/convers/convers.store"
import { of } from "rxjs"

export const ActivateConversListener = () => {
    inject(ConversStore).listenUpdateConvers()
    return of(null)
}

export const DeactivateConversListener = () => {
    inject(ConversStore).unsubscribe()
    return of(null)
}
