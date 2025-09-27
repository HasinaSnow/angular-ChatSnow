import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AuthGuard } from './shared/auth/auth.guard';
import { ConversStore } from './core/stores/convers/convers.store';
import { UserStore } from './core/stores/user/user.store';
import { ProfileStore } from './core/stores/profile/profile.store';
import { ActivateUserListener, DeactivateUserListener } from './shared/resolvers/user-listener.resolver';
import { MsgStore } from './core/stores/msg/msg.store';
import { ActivateMsgListener, DeactivateMsgListener } from './shared/resolvers/msg-listener.resolver';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        loadChildren: () => import('./views/home/home.routes').then(m => m.HomeRoutes)
    },
    {
        path: '',
        canActivate: [AuthGuard],
        providers: [ConversStore, UserStore, ProfileStore, MsgStore],
        resolve: { userStream: ActivateUserListener, msgStream: ActivateMsgListener },
        canDeactivate: [DeactivateUserListener, DeactivateMsgListener],
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
