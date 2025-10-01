import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, Router } from "@angular/router"
import { OneConversStore } from "../../core/stores/convers/one-convers.store"
import { of } from "rxjs"
import { ConversStore } from "../../core/stores/convers/convers.store"

export const LoadOneConvers = (route: ActivatedRouteSnapshot) => {
    let idRoute = route.paramMap.get('id')
    console.log('IDROUTE =>', idRoute)
    if(idRoute === '' || idRoute === null) {
        const conversStore = inject(ConversStore)
        idRoute = conversStore.conversList()[0].id
        console.log('navigate to =>', idRoute)
        // idRoute = null
        if(idRoute) inject(Router).navigate(['convers/', idRoute])
    } else {
        const oneConversStore = inject(OneConversStore)
        console.log('load [oneConvers, msgList]', idRoute)
        oneConversStore.patchOneConvers(idRoute)
        oneConversStore.loadMsgList(idRoute)
    }
    return of(null)
}