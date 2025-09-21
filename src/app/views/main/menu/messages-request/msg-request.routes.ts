import { Routes } from "@angular/router";
import { MsgRequestComponent } from "./msg-request.component";
import { MsgRequestInfosComponent } from "./msg-request-info/msg-request-info.component";
import { OneMsgRequestComponent } from "./one-msg-request/one-msg-request.component";
import { MsgRequestParticipantComponent } from "./msg-request-info/pages/msg-request-participant.component";

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
            },
            {
                path: ':id/participants',
                component: MsgRequestParticipantComponent
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
            },
            {
                path: 'participants',
                component: MsgRequestParticipantComponent
            }
        ]
    },
]