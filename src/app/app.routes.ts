import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { UserStore } from './core/stores/user/user.store';
import { ProfileStore } from './core/stores/profile/profile.store';
import { ActivateUserListener, DeactivateUserListener } from './shared/resolvers/user-listener.resolver';
import { LoadProfile } from './shared/resolvers/load-profile.resolver';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./views/home/home.routes').then(m => m.HomeRoutes)
    },
    {
        path: '',
        canActivate: [AuthGuard],
        providers: [UserStore, ProfileStore],
        resolve: {
            loadProfile: LoadProfile,
            userStream: ActivateUserListener,
        },
        canDeactivate: [DeactivateUserListener],
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
