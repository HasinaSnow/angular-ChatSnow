import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-convers-info-member-item',
    imports: [AvatarModule],
    template: `
    <div class="flex items-center gap-2 cursor-pointer">
        <p-avatar image="./favicon.ico" styleClass="font-medium text-xs" size="normal" shape="circle"/>
        <div class="flex-1">
            <div class="text-base font-semibold text-color hover:text-muted-color-emphasis transition-colors leading-5 flex-1 line-clamp-1">Robin Jonas</div>
            <div class="text-sm text-muted-color">Admin</div>
        </div>
        <i class="pi pi-chevron-right text-xs text-muted-color"></i>
    </div>`
})
export class ConversInfoMemberItemComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}