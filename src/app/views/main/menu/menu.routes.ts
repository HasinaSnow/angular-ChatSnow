import { Routes } from '@angular/router';

export const MenuRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./menu.component').then(m => m.MenuComponent),
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
      },
      {
        path: 'archives',
        loadChildren: () => import('./archive/archive.routes').then(m => m.ArchiveRoutes),
      },
      {
        path: 'msg-request',
        loadChildren: () => import('./messages-request/msg-request.routes').then(m => m.MsgRequestRoutes),
      },
      {
        path: 'invitations',
        loadChildren: () => import('./invitations/invitation.routes').then(m => m.InvitationRoutes),
      }
    ]
  }
];

export const MenuRoutesMobile: Routes = [
  {
    path: '',
    title: 'ChatSnow - menu',
    loadComponent: () => import('./menu.component').then(m => m.MenuComponent),
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.component').then(m => m.SettingsComponent),
  },
  {
    path: 'archives',
    loadChildren: () => import('./archive/archive.routes').then(m => m.ArchiveMobileRoutes),
  },
  {
    path: 'msg-request',
    title: 'ChatSnow - msg request',
    loadChildren: () => import('./messages-request/msg-request.routes').then(m => m.MsgRequestMobileRoutes),
  },
  {
    path: 'invitations',
    loadComponent: () => import('./invitations/invitations.component').then(m => m.InvitationsComponent),
  }
]