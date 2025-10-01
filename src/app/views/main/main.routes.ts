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
                loadChildren: () => import('./convers/convers.routes').then(m => m.ConversRoutes)
            },
            {
                path: 'menu',
                title: 'ChatSnow - menu',
                loadChildren: () => import('./menu/menu.routes').then(m => m.MenuRoutes)
            }
        ]
    }
]

export const MainRoutesMobile: Routes = [
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
                loadChildren: () => import('./convers/convers.routes').then(m => m.ConversRoutesMobile)
            },
            {
                path: 'menu',
                title: 'ChatSnow - menu',
                loadChildren: () => import('./menu/menu.routes').then(m => m.MenuRoutesMobile)
            }
        ]
    }
]