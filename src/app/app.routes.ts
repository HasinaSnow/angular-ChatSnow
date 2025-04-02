import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-app',
        pathMatch: 'full'
    },
    {
        path: 'main-app',
        loadChildren: () => import('./views/main/main.routes').then(m => m.MainRoutes)
    }
];
