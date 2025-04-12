import { Component, OnInit } from '@angular/core';
import { ConversListComponent } from "./convers-list/convers-list.component";
import { conversMsgComponent } from './convers-msg/convers-msg.component';
import { ConversInfoComponent } from "./convers-info/convers-info.component";

@Component({
    selector: 'app-convers',
    imports: [ConversListComponent, conversMsgComponent, ConversInfoComponent],
    template: `
        <div class="md:grid md:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
            <div class="col-span-1 md:block border-r border-surface hidden ">
                <app-convers-list/>
            </div>
            <div class="md:col-span-2 h-full w-full">
                <app-convers-msg/>
            </div>
            <div class="col-span-1 hidden border-l border-surface lg:block">
                <app-convers-info/>
            </div>
        </div>
    `
})
export class ConversComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}