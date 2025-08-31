import { Routes } from "@angular/router";
import { MsgRequestComponent } from "./msg-request.component";
import { MsgRequestInfosComponent } from "./components/msg-request-info.component";
import { OneMsgRequestComponent } from "./components/one-msg-request.component";
import { ListParticipantsComponent } from "../../../../shared/components/list-participant.component";

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
                component: ListParticipantsComponent
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
                component: ListParticipantsComponent
            }
        ]
    },
]