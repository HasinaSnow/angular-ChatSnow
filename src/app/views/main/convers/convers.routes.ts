import { Routes } from "@angular/router";
import { ConversComponent } from "./convers.component";
import { OneConversComponent } from "./one-convers/one-convers.component";
import { ConversInfoComponent } from "./one-convers/convers-info/convers-info.component";
import { ConversParticipantComponent } from "./one-convers/convers-info/pages/convers-participant.component";
import { ConversMediaComponent } from "./one-convers/convers-info/pages/convers-media.component";

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
                        component: ConversParticipantComponent
                    },
                    {
                        path: 'medias',
                        component: ConversMediaComponent
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
                path: 'info',
                component: ConversInfoComponent,
            },
            {
                path: 'participants',
                component: ConversParticipantComponent
            },
            {
                path: 'medias',
                component: ConversMediaComponent
            }
        ]
    }
]