import { inject } from "@angular/core"
import { ConversStore } from "../../core/stores/convers/convers.store"
import { of } from "rxjs"

export const LoadAllConvers = () => {
    console.log('Load all convers')
    inject(ConversStore).load()
    return of(null)
}