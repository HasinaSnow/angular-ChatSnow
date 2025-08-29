import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./views/main/main.routes').then(m => m.MainRoutes)
    },
    {
        path: 'mobile',
        loadChildren: () => import('./views/main/main.routes').then(m => m.MainRoutesMobile)
    },
];
