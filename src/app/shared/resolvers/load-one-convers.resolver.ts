import { inject } from "@angular/core"
import { ActivatedRouteSnapshot } from "@angular/router"
import { OneConversStore } from "../../core/stores/convers/one-convers.store"

export const LoadOneConvers = (route: ActivatedRouteSnapshot) => {
    const oneConversStore = inject(OneConversStore)
    const idConvers = route.paramMap.get('id')
    console.log('load one convers', idConvers)
    if(idConvers) {
        oneConversStore.patchOneConvers(idConvers)
        oneConversStore.patchMsgList(idConvers)
    }
}