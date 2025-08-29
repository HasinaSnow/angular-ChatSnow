import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'app-item-convers',
    imports: [BadgeModule, AvatarModule, RouterLink, RouterLinkActive],
    template: `
        <div (click)="onSelect.emit()" [routerLink]="['./', idSelected()]" routerLinkActive="bg-surface-200 dark:bg-surface-800 text-surface-800 dark:text-surface-100" class="p-3 flex gap-2 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
            <div class="relative flex items-center flex-col justify-center">
                <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
                <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="large" shape="circle"/>
            </div>
            <div class="text-color-emphasis">
                <div class="flex gap-1 items-start justify-between">
                    <div class="text-color text-lg font-medium leading-6">Name</div>
                    <div class="md:text-sm text-xs text-muted-color">11:10</div>
                </div>
                <p class="text-sm line-clamp-1 leading-6 text-muted-color">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nulla culpa illum perferendis possimus fuga dicta, sapiente corrupti, consequatur earum soluta reprehenderit magni architecto sit eum, suscipit obcaecati sequi!
                </p>
            </div>
        </div>
    `
})
export class ItemConversComponent {
    onSelect = output()
    idSelected = input<string>()
}