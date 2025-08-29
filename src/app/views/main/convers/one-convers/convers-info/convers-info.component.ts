import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { MenuItem } from 'primeng/api';
import { IInfoItem, ListMsgInfoComponent } from "../../../../../shared/components/list-msg-info.component";
import { ConversInfoHeaderComponent } from "./components/convers-info-header.component";
import { ConversService } from '../../../../../features/convers/convers.service';

@Component({
    selector: 'app-convers-info',
    imports: [
        ButtonModule,
        PanelModule,
        ListMsgInfoComponent,
        ConversInfoHeaderComponent
    ],
    template: `
        <div class="relative h-full w-full flex flex-col px-3 py-5 overflow-auto border-l border-surface">
            <!-- cancel button -->
            <div class="absolute top-3 left-2 lg:hidden">
                <p-button (onClick)="cancelToConversMsg()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>

            <!-- header -->
            <app-convers-info-header/>

            <!-- content -->
            <app-list-msg-info [items]="menuSettingsItems"/>
        </div>
    `
})
export class ConversInfoComponent implements OnInit {
    readonly conversService = inject(ConversService)
    items!: MenuItem[];
    menuSettingsItems: IInfoItem[] = [
        {
            label: 'Discussion Informations',
            items: [
                {
                    label: 'All participants',
                    icon: 'pi pi-users'
                },
                {
                    label: 'Media, Files and Links',
                    icon: 'pi pi-images',
                },
                {
                    label: 'Pin messages',
                    icon: 'pi pi-thumbtack'
                }
            ],
        },
        {
            label: 'Others actions',
            items: [
                {
                    label: 'Sound and Notification',
                    icon: 'pi pi-bell',
                    inputCheck: {
                        check: signal(false),
                    }
                },
                {
                    label: 'Search in conversation',
                    icon: 'pi pi-search'
                },
            ],
        },
        {
            label: 'Privacy and Support',
            items: [
                {
                    label: 'Report this conversation',
                    description: 'Laissez un commentaire ou signalez la conversation',
                    icon: 'pi pi-flag-fill'
                },
                {
                    label: 'Block',
                    icon: 'pi pi-minus-circle',
                },
                {
                    label: 'Delete conversation',
                    icon: 'pi pi-trash',
                    severity: 'danger'
                }
            ],
        }
    ]

    ngOnInit() {}

    cancelToConversMsg() {
        this.conversService.selectedComponent.set('msg')
    }

}