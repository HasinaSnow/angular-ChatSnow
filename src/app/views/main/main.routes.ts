import { Routes } from '@angular/router';
import { ActivateConversListener, DeactivateConversListener } from '../../shared/resolvers/convers-listener.resolver';
import { ConversStore } from '../../core/stores/convers/convers.store';
import { LoadAllConvers } from '../../shared/resolvers/load-all-convers.resolver';

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
                providers: [ConversStore],
                resolve: {
                    loadAllConvers: LoadAllConvers,
                    conversStream: ActivateConversListener
                },
                canDeactivate: [DeactivateConversListener],
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
                providers: [ConversStore],
                resolve: {
                    loadAllConvers: LoadAllConvers,
                    conversStream: ActivateConversListener
                },
                canDeactivate: [DeactivateConversListener],
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