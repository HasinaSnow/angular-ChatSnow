import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-convers-item-inline',
    imports: [AvatarModule],
    template: `
    <span class="flex flex-col items-center w-fit cursor-pointer">
        <p-avatar image="./favicon.ico" styleClass="font-medium text-base flex" size="large" shape="circle"/>
        <span class="text-xs text-color w-[59px] text-center line-clamp-1">inline name</span>
    </span>`
})
export class ConversItemInlineComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}