import { Routes } from "@angular/router";
import { MsgRequestComponent } from "./msg-request.component";
import { MsgRequestInfosComponent } from "./components/msg-request-info.component";
import { OneMsgRequestComponent } from "./components/one-msg-request.component";

export const MsgRequestRoutes: Routes = [
    {
        path: '',
        component: MsgRequestComponent,
        children: [
            {
                path: ':id',
                component: OneMsgRequestComponent
            },
            {
                path: ':id/info',
                component: MsgRequestInfosComponent
            }
        ]
    }
]

export const MsgRequestMobileRoutes: Routes = [
    {
        path: '',
        component: MsgRequestComponent
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: OneMsgRequestComponent
            },
            {
                path: 'info',
                component: MsgRequestInfosComponent
            }
        ]
    },
]