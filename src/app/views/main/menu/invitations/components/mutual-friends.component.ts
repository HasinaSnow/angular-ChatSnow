import { Component, inject } from "@angular/core";
import { ItemFriendComponent } from "../../../../../shared/components/ui/item-friend.component";
import { InputTextModule } from "primeng/inputtext";
import { IconFieldModule } from "primeng/iconfield";
import { InputIconModule } from "primeng/inputicon";
import { Button } from "primeng/button";
import { Location } from "@angular/common";

@Component({
    selector: 'app-mutual-friends',
    imports: [ItemFriendComponent, InputTextModule, IconFieldModule, InputIconModule, Button],
    template: `
    <div class="py-2 pl-3 text-color h-full w-full flex flex-col gap-3 overflow-auto">
        <!-- header -->
        <div class="flex items-center gap-3">
            <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            <h2 class="text-2xl leading-none font-semibold">Mutual Friends</h2>
        </div>

        <!-- search -->
        <div class="flex flex-col gap-3 px-2">
            <p-iconfield styleClass="w-full">
                <p-inputicon styleClass="pi pi-search" />
                <input type="text" pInputText placeholder="Search mutual friends" variant="outlined" class="w-full" />
            </p-iconfield>
            <p class="text-muted-color">All mutual friends with '<span class="font-semibold">Hasina snow</span>'</p>
        </div>

        <!-- list -->
        <div class="flex-1 flex flex-col overflow-auto pt-1 gap-1 px-2">
            <app-item-friend [mutualFriends]="4"/>
            <app-item-friend [mutualFriends]="1"/>
            <app-item-friend [mutualFriends]="34"/>
            <app-item-friend [mutualFriends]="45"/>
            <app-item-friend [mutualFriends]="23"/>
            <app-item-friend [mutualFriends]="12"/>
            <app-item-friend [mutualFriends]="8"/>
            <app-item-friend [mutualFriends]="20"/>
        </div>
    </div>
    `
})
export class MutualFriendsComponent {
    private location = inject(Location)

    cancel() {this.location.back()}
}