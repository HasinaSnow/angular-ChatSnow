import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
    selector: 'app-msg-item',
    imports: [AvatarModule],
    template: `
    <div class="flex items-start gap-2 w-fit max-w-[75%]">
        <div class="flex items-center gap-2 py-1 sticky top-0 transition-all">
            <p-avatar image="./favicon.ico" styleClass="h-10 w-10 text-sm font-medium" size="normal" shape="circle"/>
        </div>
        <div class="flex-1 bg-surface-100 dark:bg-surface-800 px-3 py-2 rounded-lg">
            <p class="text-color text-base leading-6 mb-0">Intriguing!</p>
        </div>
    </div>
    <div class="flex flex-row-reverse py-1 ml-auto items-start gap-2 w-fit max-w-[75%]">
        <div class="flex-1 bg-surface-500 px-3 py-2 rounded-lg">
            <p class="leading-6 text-base text-surface-0 mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt error a illo, modi eveniet iusto sint ipsa explicabo? In excepturi vitae qui a mollitia quasi suscipit ad laudantium id?.</p>
        </div>
    </div>`
})
export class MsgItemComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}