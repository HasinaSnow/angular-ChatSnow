import { Routes } from "@angular/router";
import { ConversComponent } from "./convers.component";
import { OneConversComponent } from "./one-convers/one-convers.component";
import { ConversInfoComponent } from "./one-convers/convers-info/convers-info.component";
import { ConversParticipantComponent } from "./one-convers/convers-info/pages/convers-participant.component";
import { ConversMediaComponent } from "./one-convers/convers-info/pages/convers-media.component";
import { LoadOneConvers } from "../../../shared/resolvers/load-one-convers.resolver";
import { OneConversStore } from "../../../core/stores/convers/one-convers.store";
import { ActivateMsgListenerForOneConvers, DeactivateMsgForOneConvers } from "../../../shared/resolvers/msg-listener.resolver";
import { ConversNewComponent } from "./convers-new/convers-new.component";

export const ConversRoutes: Routes = [
    {
        path: '',
        component: ConversComponent,
        children: [
            {
                path: 'new',
                component: ConversNewComponent,
                children: [
                    {
                        path: '',
                        component: ConversInfoComponent
                    }
                ]
            },
            {
                path: ':id',
                component: OneConversComponent,
                providers: [OneConversStore],
                resolve: {loadOneConvers: LoadOneConvers, msgStream: ActivateMsgListenerForOneConvers },
                canDeactivate: [DeactivateMsgForOneConvers],
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
        path: 'new',
        children: [
            {
                path: '',
                component: ConversNewComponent
            },
            {
                path: 'info',
                component: ConversInfoComponent
            }
        ]
    },
    {
        path: ':id',
        providers: [OneConversStore],
        resolve: {load: LoadOneConvers, msgStream: ActivateMsgListenerForOneConvers },
        canDeactivate: [DeactivateMsgForOneConvers],
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
    },
]