import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Avatar } from "primeng/avatar";
import { Badge } from "primeng/badge";
import { Button } from "primeng/button";

@Component({
    selector: 'app-item-friend',
    imports: [RouterLink,Badge,Avatar,Button],
    template: `
        <div [routerLink]="['./', idSelected()]" routerLinkActive="bg-surface-200 dark:bg-surface-800 text-surface-800 dark:text-surface-100" class="px-3 py-2 flex gap-3 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
            <div class="relative flex items-center flex-col justify-center">
                <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
                <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="large" shape="circle"/>
            </div>
            <div class="text-color-emphasis flex-1">
                <div class="flex gap-1 items-start justify-between">
                    <div class="text-color text-lg font-medium leading-6">Name</div>
                </div>
                @if(mutualFriends() > 0) {
                    <p class="text-sm line-clamp-1 leading-6 text-muted-color">
                        {{mutualFriends()}} ami(e)s en commun
                    </p>
                }
            </div>
            <p-button icon="pi pi-ellipsis-v text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
        </div>`
})
export class ItemFriendComponent {
    idSelected = input<string>()
    mutualFriends = input.required<number>()

}