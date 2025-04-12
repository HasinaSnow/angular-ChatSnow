import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';

@Component({
    selector: 'app-convers-item',
    imports: [RouterLink, BadgeModule, AvatarModule],
    template: `
    <!-- <div [routerLink]="[]" routerLinkActive="bg-surface-100 text-surface-800"  class="p-4 flex gap-2 items-center hover:bg-emphasis bg-surface-100 text-surface-800 transition-all duration-300 cursor-pointer">
        <div class="relative flex items-center flex-col justify-center">
            <p-badge class="absolute top-0 right-0 p-[1px]" severity="success"/>
            <p-avatar image="./favicon.ico" styleClass="font-medium text-base flex border" size="large" shape="circle"/>
        </div>
        <div class="flex-1">
            <div class="flex gap-1 items-start justify-between">
                <div class="text-color font-semibold leading-6">Name</div>
                <div class="text-sm text-color font-medium leading-5">11:10</div>
            </div>
            <div class="text-sm mt-1 line-clamp-1 leading-5 font-medium text-color">
                <p-badge value="5" badgeSize="small" severity="contrast"/>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nulla culpa illum perferendis possimus fuga dicta, sapiente corrupti, consequatur earum soluta reprehenderit magni architecto sit eum, suscipit obcaecati sequi!
            </div>
        </div>
    </div> -->
    <div [routerLink]="[]" routerLinkActive="bg-surface-200 text-surface-800"  class="p-4 flex gap-2 items-center hover:bg-emphasis transition-all duration-300 cursor-pointer">
        <div class="relative flex items-center flex-col justify-center">
            <p-badge class="absolute top-0 right-0 p-[1px]" severity="success"/>
            <p-avatar image="./favicon.ico" styleClass="font-medium text-base" size="large" shape="circle"/>
        </div>
        <div class="text-color-emphasis">
            <div class="flex gap-1 items-start justify-between">
                <div class="text-color font-medium leading-6">Name</div>
                <div class="text-sm text-muted-color leading-5">11:10</div>
            </div>
            <p class="text-sm line-clamp-1 leading-5 text-muted-color">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates eius nulla culpa illum perferendis possimus fuga dicta, sapiente corrupti, consequatur earum soluta reprehenderit magni architecto sit eum, suscipit obcaecati sequi!
            </p>
        </div>
    </div>
    `
})
export class ConversItemComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}