import { inject } from "@angular/core"
import { ConversStore } from "../../core/stores/convers/convers.store"
import { of } from "rxjs"
import { _FAKE_DATA_CONVERS, } from "../../core/data/fake.data"

export const LoadAllConvers = () => {
    console.log('Load all convers')
    console.log('convers entities 1 ===>', _FAKE_DATA_CONVERS.getValue())
    inject(ConversStore).load()
    return of(null)
}