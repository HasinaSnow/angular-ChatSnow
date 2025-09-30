import { inject } from "@angular/core"
import { ConversStore } from "../../core/stores/convers/convers.store"
import { of } from "rxjs"

export const ActivateConversListener = () => {
    console.log('Activate all convers listener')
    inject(ConversStore).listenUpdateConvers()
    return of(null)
}

export const DeactivateConversListener = () => {
    console.log('Deactivate all convers listener')
    inject(ConversStore).unsubscribe()
    return of(null)
}
