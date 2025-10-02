import { inject } from "@angular/core"
import { ConversStore } from "../../core/stores/convers/convers.store"
import { of } from "rxjs"
import { _FAKE_DATA_CONVERS, } from "../../core/data/fake.data"

export const LoadAllConvers = () => {
    console.log('Load all convers')
    inject(ConversStore).load()
    return of(null)
}