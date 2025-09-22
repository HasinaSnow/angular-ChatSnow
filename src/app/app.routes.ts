import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './shared/auth/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./views/home/home.routes').then(m => m.HomeRoutes)
    },
    {
        path: '',
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () => import('./views/main/main.routes').then(m => m.MainRoutes)
            },
            {
                path: 'mobile',
                loadChildren: () => import('./views/main/main.routes').then(m => m.MainRoutesMobile)
            },
        ]
    }
];
