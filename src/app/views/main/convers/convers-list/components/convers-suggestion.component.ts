import { Component, inject, signal, WritableSignal } from '@angular/core';
import { HeaderTitleComponent } from "../../../../../shared/components/ui/header-title.component";
import { Button } from "primeng/button";
import { ConversService } from '../../convers.service';
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { ItemFriendComponent } from "../../../../../shared/components/ui/item-friend.component";
import { ConversStore } from '../../../../../core/stores/convers/convers.store';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TSuggestion } from '../../../../../shared/types/suggestion.type';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
// import { CreateNewGroupComponent } from '../../convers-new/components/convers-group-new.component';
import { BreakpointService } from '../../../../../shared/services/breakpoint.service';

@Component({
    selector: 'app-convers-suggestion',
    template: `
        <div class="p-2 flex flex-col gap-2 h-full overflow-auto w-full border-surface md:border-r">
            <!-- header -->
            <div class="w-full flex flex-col gap-2 px-2">
                <div class="flex items-center gap-2 pl-2 pt-2">
                    <p-button (onClick)="back()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
                    <app-header-title title="New chat"/>
                </div>
                <!-- search input -->
                <p-iconfield styleClass="w-full">
                    <p-inputicon styleClass="pi pi-search" />
                    <input type="text" [(ngModel)]="searchKey" pInputText placeholder="Search" class="w-full" />
                </p-iconfield>

                <p-button icon="pi pi-users" label="Create a Group" (onClick)="openCreationGroupForm()"></p-button>
                <p class="text-semibold text-color">Suggestions</p>
            </div>
            <!-- suggestions and search Result -->
            <div class="flex-1 overflow-auto">
                @for(sugg of suggestions(); track $index) {
                    <app-item-friend
                        (onSelect)="startConvers(sugg)"
                        [idUser]="sugg.idUser"
                        [idSelected]="idSelected()"
                        [urlAvatar]="sugg.urlAvatar"
                        [name]="sugg.name"
                        [isOnline]="sugg.isOnline"/>
                }
            </div>
        </div>
    `,
    imports: [HeaderTitleComponent, FormsModule, InputText, Button, IconField, InputIcon, ItemFriendComponent]
})
export class ConversSuggestionComponent {
    private dialogService = inject(DialogService)
    private bpService = inject(BreakpointService)
    private converService = inject(ConversService)
    private store = inject(ConversStore)

    suggestions = this.store.suggestions
    searchKey: WritableSignal<string> = signal('')
    searchConvers = this.store.searchSuggestions(this.searchKey)
    idSelected: WritableSignal<string> = signal('')

    ref: DynamicDialogRef|undefined

    startConvers(suggestion: TSuggestion) {
        this.idSelected.set(suggestion.idUser)
        this.store.startConvers(suggestion)
    }

    openCreationGroupForm() {
        // this.ref = this.dialogService.open(CreateNewGroupComponent, {
        //     header: 'Create new convers group',
        //     inputValues: {
        //         onSave: (value?: string) => {
        //             this.ref?.close()
        //         },
        //     },
        //     modal: true,
        //     closable: !this.bpService.isMobile(),
        //     position: 'center',
        //     breakpoints: {
        //         '1024px': '60vw',
        //         '640px': '95vw',
        //     }
        // })
    }

    back() { this.converService.switchToConversView('list') }
}