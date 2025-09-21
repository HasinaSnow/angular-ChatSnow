import { Component, inject } from '@angular/core';
import { Button } from "primeng/button";
import { Location } from '@angular/common';
import { ItemParticipantComponent } from '../../../../../../shared/components/ui/item-participant.component';

@Component({
    selector: 'app-convers-participant',
    template: `
    <div class="py-2 pl-3 text-color h-full w-full flex flex-col gap-3 overflow-auto">
        <!-- header -->
        <div class="flex items-center gap-3">
            <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            <h2 class="text-2xl leading-none font-semibold">Participants</h2>
        </div>

        <!-- list -->
        <div class="flex-1 flex flex-col overflow-auto items-center pt-1 gap-1 pl-3">
            <app-item-participant class="w-full" [mutualFriends]="4" [isAdmin]="true"/>
            <app-item-participant class="w-full" [mutualFriends]="1" [isAdmin]="true"/>
            <app-item-participant class="w-full" [mutualFriends]="34" [isAdmin]="false"/>
            <app-item-participant class="w-full" [mutualFriends]="45" [isAdmin]="false"/>
            <app-item-participant class="w-full" [mutualFriends]="23" [isAdmin]="false"/>
            <app-item-participant class="w-full" [mutualFriends]="12" [isAdmin]="false"/>
            <app-item-participant class="w-full" [mutualFriends]="8" [isAdmin]="false"/>
            <app-item-participant class="w-full" [mutualFriends]="20" [isAdmin]="false"/>
        </div>
    </div>
    `,
    imports: [Button, ItemParticipantComponent]
})
export class ConversParticipantComponent {
    private location = inject(Location)
    cancel() { this.location.back() }
}