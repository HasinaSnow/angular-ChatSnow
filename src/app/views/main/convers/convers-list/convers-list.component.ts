import { Component, inject, OnInit } from '@angular/core';
import { ConversItemInlineComponent } from "./components/convers-item-inline.component";
import { ConversService } from '../convers.service';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ItemConversComponent } from '../../../../shared/components/ui/item-convers.component';
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-convers-list',
    imports: [
    ConversItemInlineComponent,
    ItemConversComponent,
    TooltipModule,
    FormsModule,
    IconField,
    InputIcon,
    InputText
],
    template: `
        <div class="p-1 flex flex-col gap-4 overflow-auto h-full w-full">
            <!-- search -->
            <p-iconfield styleClass="w-full">
                <p-inputicon styleClass="pi pi-search" />
                <input type="text" pInputText placeholder="Search" class="w-full" />
            </p-iconfield>

            <!-- convers list -->
            <div class="w-full flex-1 flex flex-col gap-1 pb-6 overflow-auto">
                <!-- inline convers list -->
                <div class="w-full flex gap-3 min-h-min overflow-y-auto pb-3 px-2">
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                </div>

                <!-- convers item -->
                <app-item-convers (onSelect)="selectComponent()" [idSelected]="'bf'" />
                <app-item-convers/>
            </div>

        </div>
    `
})
export class ConversListComponent {
    private conversService = inject(ConversService)
    items: MenuItem[] = [
        { label: 'Profile', icon: 'pi pi-user', routerLink: './profile' },
        { label: 'Chat', icon: 'pi pi-comment', routerLink: './convers'},
        { label: 'Settings', icon: 'pi pi-cog', routerLink: './profile'},
    ];

    selectComponent() {
        this.conversService.swicthToComponent('msg')
    }

}