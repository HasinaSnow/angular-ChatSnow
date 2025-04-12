import { Component, OnInit } from '@angular/core';
import { ConversListHeaderComponent } from "./components/convers-list-header.component";
import { ConversItemComponent } from "./components/convers-item.component";
import { ConversItemInlineComponent } from "./components/convers-item-inline.component";

@Component({
    selector: 'app-convers-list',
    imports: [ConversListHeaderComponent, ConversItemComponent, ConversItemInlineComponent],
    template: `
        <div class="flex flex-col overflow-auto h-full w-full">
            <!-- header -->
            <app-convers-list-header/>

            <!-- convers list -->
            <div class="w-full flex-1 flex flex-col pb-6 overflow-auto">
                <!-- inline convers list -->
                <div class="w-full flex gap-3 min-h-min overflow-y-auto mb-2">
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                </div>

                <!-- convers item -->
                <app-convers-item/>
                <app-convers-item/>
                <app-convers-item/>
                <app-convers-item/>
                <app-convers-item/>
            </div>
        </div>
    `
})
export class ConversListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}