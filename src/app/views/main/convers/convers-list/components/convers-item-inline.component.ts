import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-convers-item-inline',
    imports: [AvatarModule, RouterLink],
    template: `
    <span [routerLink]="['./', idSelected()]" class="flex flex-col items-center w-fit cursor-pointer">
        <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base flex" size="large" shape="circle"/>
        <span class="text-xs text-color w-[59px] text-center line-clamp-1">inline name</span>
    </span>`
})
export class ConversItemInlineComponent {
    idSelected = input<string>()

}