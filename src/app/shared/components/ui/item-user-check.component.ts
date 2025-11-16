import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { Checkbox } from "primeng/checkbox";

@Component({
    selector: 'app-item-user-check',
    imports: [Badge, Avatar, Checkbox, FormsModule],
    template: `
    <div class="md:px-3 py-2 flex gap-3 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
        <div class="relative flex items-center flex-col justify-center">
            <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
            <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="large" shape="circle"/>
        </div>
        <div class="flex-1 text-color text-lg font-medium line-clamp-1 leading-6">hasina niaina snow</div>
        <p-checkbox [(ngModel)]="check" [binary]="true" />
    </div>
    `
})
export class ItemUserCheckComponent {
    check = model.required<boolean>()
    name = input.required<string>()
    urlAvatar = input.required<string|null>()
    isOnline = input.required<boolean>()
}