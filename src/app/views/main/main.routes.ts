import { Routes } from '@angular/router';

export const MainRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./main.component').then(m => m.MainComponent),
        children: [
            {
                path: '',
                redirectTo: 'convers',
                pathMatch: 'full'
            },
            {
                path: 'convers',
                title: 'ChatSnow - conversation',
                loadComponent: () => import('./convers/convers.component').then(m => m.ConversComponent)
            },
            {
                path: 'profile',
                title: 'ChatSnow - profile',
                loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent)
            }
        ]
    }
]