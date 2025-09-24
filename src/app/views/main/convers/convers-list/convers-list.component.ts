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
import { ConversStore } from '../../../../core/stores/convers/convers.store';
import { OnlineUserStore } from '../../../../core/stores/user/online-user.store';

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
                    @for (online of onlines(); track $index) {
                        <app-convers-item-inline [name]="online.name" [urlAvatar]="online.urlAvatar" />
                    }
                </div>

                <!-- convers item -->
                 @for(convers of conversList(); track $index) {
                    <app-item-convers 
                      (onSelect)="selectComponent()"
                      [idSelected]="convers.id"
                      [urlAvatar]="convers.urlAvatar"
                      [name]="convers.name"
                      [lastMsg]="convers.lastMsg"
                      [updatedAt]="convers.updatedAt"
                      [createdAt]="convers.createdAt"
                      [isOnline]="convers.isOnline"
                      [unreadCount]="convers.unreadCount"
                    />
                 }
            </div>

        </div>
    `
})
export class ConversListComponent {
    private conversService = inject(ConversService)
    private store = inject(ConversStore)
    onlines = inject(OnlineUserStore).OnlineUser
    conversList = this.store.conversList

    items: MenuItem[] = [
        { label: 'Profile', icon: 'pi pi-user', routerLink: './profile' },
        { label: 'Chat', icon: 'pi pi-comment', routerLink: './convers'},
        { label: 'Settings', icon: 'pi pi-cog', routerLink: './profile'},
    ];

    selectComponent() {
        this.conversService.swicthToComponent('msg')
    }

}