import { Routes } from "@angular/router";
import { ConversComponent } from "./convers.component";
import { OneConversComponent } from "./one-convers/one-convers.component";
import { ListParticipantsComponent } from "../../../shared/components/list-participant.component";
import { ConversInfoComponent } from "./one-convers/convers-info/convers-info.component";

export const ConversRoutes: Routes = [
    {
        path: '',
        component: ConversComponent,
        children: [
            {
                path: ':id',
                component: OneConversComponent,
                children: [
                    {
                        path: '',
                        component: ConversInfoComponent
                    },
                    {
                        path: 'participants',
                        component: ListParticipantsComponent
                    }
                ]
            },
        ]
    }
]

export const ConversRoutesMobile: Routes = [
    {
        path: '',
        component: ConversComponent
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: OneConversComponent
            },
            {
                path: 'participants',
                component: ListParticipantsComponent
            }
        ]
    }
]