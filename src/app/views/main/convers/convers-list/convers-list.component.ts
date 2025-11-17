import { Component, inject, signal, WritableSignal } from '@angular/core';
import { StreamUserSuggestionComponent } from "./components/stream-user-suggestion.component";
import { ConversService } from '../convers.service';
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { ItemConversComponent } from '../../../../shared/components/ui/item-convers.component';
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ConversStore } from '../../../../core/stores/convers/convers.store';
import { TUniqId } from '../../../../shared/types/uniq-id.type';
import { TSuggestion } from '../../../../shared/types/suggestion.type';

@Component({
    selector: 'app-convers-list',
    imports: [
        StreamUserSuggestionComponent,
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
                <input type="text" [(ngModel)]="searchKey" pInputText placeholder="Search" class="w-full" />
            </p-iconfield>

            <!-- convers list -->
            <div class="w-full flex-1 flex flex-col gap-1 pb-6 overflow-auto">
                <!-- inline convers list -->
                <div class="w-full flex gap-3 min-h-min overflow-y-auto pb-3 px-2">
                    @for (user of streamUsers(); track user.idUser) {
                        <app-stream-user-suggestion 
                            (onSelect)="startConvers(user)"
                            [name]="user.name"
                            [urlAvatar]="user.urlAvatar"
                            [isOnline]="user.isOnline"
                            />
                    }
                </div>

                <!-- convers item -->
                 @for(convers of conversList(); track convers.id) {
                    <app-item-convers 
                      (onSelect)="selectComponent(convers.id)"
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
    conversList = this.store.conversList
    streamUsers = this.store.streamUsers
    searchKey: WritableSignal<string> = signal('')
    searchConvers = this.store.searchConvers(this.searchKey)

    items: MenuItem[] = [
        { label: 'Profile', icon: 'pi pi-user', routerLink: './profile' },
        { label: 'Chat', icon: 'pi pi-comment', routerLink: './convers'},
        { label: 'Settings', icon: 'pi pi-cog', routerLink: './profile'},
    ];

    startConvers(user: TSuggestion) {
        this.store.startConvers(user)
    }

    selectComponent(idConvers: TUniqId) {
        this.store.resetUnreadCount(idConvers)
        this.conversService.switchToComponent('msg')
    }

}