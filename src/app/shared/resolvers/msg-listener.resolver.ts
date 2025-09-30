import { inject } from "@angular/core"
import { MsgStore } from "../../core/stores/msg/msg.store"
import { OneConversStore } from "../../core/stores/convers/one-convers.store"
import { of } from "rxjs"

export const ActivateMsgListener = () => {
    console.log('Activate all msg listener')
    inject(MsgStore).listenUpdatedMsgs()
    return of(null)
}

export const ActivateMsgListenerForOneConvers = () => {
    console.log('Activate msg listener for one convers')
    inject(OneConversStore).listenMsgInOneConvers()
    return of(null)
}

export const DeactivateMsgForOneConvers = () => {
    console.log('Deactivate msg listener for one convers')
    inject(OneConversStore).unsubscribe()
    return of(null)
}

export const DeactivateMsgListener = () => {
    console.log('Deactivate all msgs listener')
    const msgStore = inject(MsgStore)
    msgStore.unsubscribe()
    return of(null)
}