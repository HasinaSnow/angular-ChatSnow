import { Component, inject, OnInit, output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConversInfoHeaderComponent } from "./components/convers-info-header.component";
import { ConversService } from '../../../../features/convers/convers.service';
import { MenuItem } from 'primeng/api';
import { IItemSettings, MenuSettingsComponent } from "../../../../shared/components/menu-settings.component";

@Component({
    selector: 'app-convers-info',
    imports: [
    ButtonModule,
    PanelModule,
    ConversInfoHeaderComponent,
    MenuSettingsComponent,
],
    template: `
        <div class="relative h-full w-full flex flex-col px-3 py-5 overflow-auto">
            <!-- cancel button -->
            <div class="absolute top-2 left-2 lg:hidden">
                <p-button (onClick)="cancelToConversMsg()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>

            <!-- header -->
            <app-convers-info-header/>

            <!-- content -->
            <app-menu-settings [items]="menuSettingsItems"/>
        </div>
    `
})
export class ConversInfoComponent implements OnInit {
    readonly conversService = inject(ConversService)
    items!: MenuItem[];
    menuSettingsItems: IItemSettings[] = [
        {
            label: 'Preferences',
            items: [
                {
                    label: 'Quick reaction',
                    icon: 'pi pi-file',
                },
                {
                    label: 'pseudos',
                    icon: 'pi pi-image',
                }
            ],
        },
        {
            label: 'Others actions',
            items: [
                {
                    label: 'Upload',
                    icon: 'pi pi-cloud-upload',
                    inputCheck: {
                        check: signal(false),
                    }
                },
                {
                    label: 'Download',
                    icon: 'pi pi-cloud-download'
                },
                {
                    label: 'Sync',
                    icon: 'pi pi-refresh'
                }
            ],
        },
        {
            label: 'Discussion Information',
            items: [
                {
                    label: 'All participants',
                    icon: 'pi pi-users'
                },
                {
                    label: 'Keyword research',
                    icon: 'pi pi-search'
                },
                {
                    label: 'pin messages',
                    icon: 'pi pi-pin'
                }
            ],
        }
    ]

    ngOnInit() {}

    cancelToConversMsg() {
        this.conversService.selectedComponent.set('msg')
    }

}