import { Component, input, output } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Avatar } from "primeng/avatar";
import { Badge } from "primeng/badge";
import { Button } from "primeng/button";

@Component({
    selector: 'app-invitation-item',
    imports: [
    RouterLink,
    RouterLinkActive,
    Badge,
    Avatar,
    Button
],
    template: `
    <div (click)="onSelect.emit()" [routerLink]="['./', idSelected()]" routerLinkActive="bg-surface-200 dark:bg-surface-800 text-surface-800 dark:text-surface-100" class="px-3 py-2 flex gap-3 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
        <div class="relative flex items-center flex-col justify-center">
            <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
            <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="xlarge" shape="circle"/>
        </div>
        <div class="text-color-emphasis flex-1">
            <div class="flex gap-1 items-center justify-between">
                <div class="text-color text-lg flex-1 font-medium leading-6">Name</div>
                <span class="text-xs text-muted-color">5 day</span>
            </div>
            <p class="text-sm line-clamp-1 leading-6 text-muted-color">
                @if(mutualFriends() > 0) {
                    {{mutualFriends()}} ami(e)s en commun
                }
                <span class="flex w-full items-center gap-2 {{mutualFriends() === 0 ? 'pt-2': ''}}">
                    @if(isInvitation()) {
                        <p-button size="small" label="Confirm" styleClass="px-2 text-xs"/>
                    } @else {
                        <p-button size="small" label="Send request" styleClass="px-2 text-xs"/>
                    }
                    <p-button size="small" label="Remove" severity="contrast" outlined="true" styleClass="m-0 text-xs"/>
                </span>
            </p>
        </div>
    </div>`
})
export class InvitationItemComponent {
    idSelected = input<string>()
    onSelect = output()
    isInvitation = input.required<boolean>()
    mutualFriends = input.required<number>()
}