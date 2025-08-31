import { Routes } from "@angular/router";
import { MutualFriendsComponent } from "./components/mutual-friends.component";
import { InvitationsComponent } from "./invitations.component";
import { OneInvitationComponent } from "./components/one-invitation.component";

export const InvitationRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./invitations.component').then(m => m.InvitationsComponent),
        children: [
            {
                path: ':id',
                loadComponent: () => import('./components/one-invitation.component').then(m => m.OneInvitationComponent),
            },
            {
                path: ':id/mutual-friends',
                component: MutualFriendsComponent
            }
        ]
    }
]

export const InvitationMobileRoutes: Routes = [
    {
        path: '',
        component: InvitationsComponent
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: OneInvitationComponent
            },
            {
                path: 'mutual-friends',
                component: MutualFriendsComponent
            }
        ]
    }
]