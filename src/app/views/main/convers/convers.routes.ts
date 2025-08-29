import { Routes } from "@angular/router";
import { ConversComponent } from "./convers.component";
import { OneConversComponent } from "./one-convers/one-convers.component";

export const ConversRoutes: Routes = [
    {
        path: '',
        component: ConversComponent,
        children: [
            {
                path: ':id',
                component: OneConversComponent
            }
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
        component: OneConversComponent
    }
]