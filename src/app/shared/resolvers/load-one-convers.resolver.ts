import { inject } from "@angular/core"
import { ActivatedRouteSnapshot } from "@angular/router"
import { OneConversStore } from "../../core/stores/convers/one-convers.store"
import { of } from "rxjs"

export const LoadOneConvers = (route: ActivatedRouteSnapshot) => {
    const oneConversStore = inject(OneConversStore)
    const idConvers = route.paramMap.get('id')
    console.log('load [oneCovners, msgList]', idConvers)
    if(idConvers !== '' && idConvers !== null) {
        oneConversStore.patchOneConvers(idConvers)
        oneConversStore.loadMsgList(idConvers)
    }
    return of(null)
}