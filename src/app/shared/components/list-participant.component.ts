import { Component, inject } from '@angular/core';
import { Button } from "primeng/button";
import { ItemParticipantComponent } from "./item-participant.component";
import { Location } from '@angular/common';

@Component({
    selector: 'app-list-participants',
    template: `
    <div class="py-2 pl-3 text-color h-full w-full flex flex-col gap-3 overflow-auto">
        <!-- header -->
        <div class="flex items-center gap-3">
            <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            <h2 class="text-2xl leading-none font-semibold">Participants</h2>
        </div>

        <!-- list -->
        <div class="flex-1 flex flex-col overflow-auto pt-1 gap-1 px-2">
            <app-item-participant [mutualFriends]="4" [isAdmin]="true"/>
            <app-item-participant [mutualFriends]="1" [isAdmin]="true"/>
            <app-item-participant [mutualFriends]="34" [isAdmin]="false"/>
            <app-item-participant [mutualFriends]="45" [isAdmin]="false"/>
            <app-item-participant [mutualFriends]="23" [isAdmin]="false"/>
            <app-item-participant [mutualFriends]="12" [isAdmin]="false"/>
            <app-item-participant [mutualFriends]="8" [isAdmin]="false"/>
            <app-item-participant [mutualFriends]="20" [isAdmin]="false"/>
        </div>
    </div>
    `,
    imports: [Button, ItemParticipantComponent]
})
export class ListParticipantsComponent {
    private location = inject(Location)
    cancel() { this.location.back() }
}