import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { ConversStore } from './core/stores/convers/convers.store';
import { UserStore } from './core/stores/user/user.store';
import { OnlineUserStore } from './core/stores/user/online-user.store';
import { ProfileStore } from './core/stores/profile/profile.store';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./views/home/home.routes').then(m => m.HomeRoutes)
    },
    {
        path: '',
        canActivate: [AuthGuard],
        providers: [ConversStore, UserStore, OnlineUserStore, ProfileStore],
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
