import { Routes } from "@angular/router";
import { ArchiveComponent } from "./archive.component";
import { OneArchiveComponent } from "./components/one-archive.component";
import { ArchiveInfoComponent } from "./components/archive-info.component";

export const ArchiveRoutes: Routes = [
    {
        path: '',
        component: ArchiveComponent,
        children: [
            {
                path: ':id',
                component: OneArchiveComponent
            },
            {
                path: ':id/info',
                component: ArchiveInfoComponent
            }
        ]
    }
]

export const ArchiveMobileRoutes: Routes = [
    {
        path: '',
        component: ArchiveComponent
    },
    {
        path: ':id',
        children: [
            {
                path: '',
                component: OneArchiveComponent
            },
            {
                path: 'info',
                component: ArchiveInfoComponent
            }
        ]
    },
]