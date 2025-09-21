import { Routes } from "@angular/router";
import { ArchiveComponent } from "./archive.component";
import { OneArchiveComponent } from "./one-archive/one-archive.component";
import { ArchiveInfoComponent } from "./archive-info/archive-info.component";
import { ArchiveMediaComponent } from "./archive-info/pages/archive-media.component";
import { ArchiveParticipantComponent } from "./archive-info/pages/archive-participant.component";

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
            },
            {
                path: ':id/participants',
                component: ArchiveParticipantComponent
            },
            {
                path: ':id/medias',
                component: ArchiveMediaComponent
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
            },
            {
                path: 'participants',
                component: ArchiveParticipantComponent
            },
            {
                path: 'medias',
                component: ArchiveMediaComponent
            }
        ]
    },
]