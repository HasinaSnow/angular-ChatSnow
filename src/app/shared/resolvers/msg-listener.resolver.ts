import { inject } from "@angular/core"
import { MsgStore } from "../../core/stores/msg/msg.store"
import { OneConversStore } from "../../core/stores/convers/one-convers.store"
import { of } from "rxjs"

export const ActivateMsgListener = () => {
    inject(MsgStore).listenUpdatedMsgs()
    return of(null)
}

export const ActivateMsgListenerForOneConvers = () => {
    inject(OneConversStore).listenMsgInOneConvers()
    return of(null)
}

export const DeactivateMsgForOneConvers = () => {
    inject(OneConversStore).unsubscribe()
    return of(null)
}

export const DeactivateMsgListener = () => {
    const msgStore = inject(MsgStore)
    msgStore.unsubscribe()
    return of(null)
}