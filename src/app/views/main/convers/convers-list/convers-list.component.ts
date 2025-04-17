import { Component, inject, OnInit } from '@angular/core';
import { ConversListHeaderComponent } from "./components/convers-list-header.component";
import { ConversItemComponent } from "./components/convers-item.component";
import { ConversItemInlineComponent } from "./components/convers-item-inline.component";
import { ConversService } from '../../../../features/convers/convers.service';

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
                <div class="w-full flex gap-3 min-h-min overflow-y-auto pb-3 px-2">
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                    <app-convers-item-inline/>
                </div>

                <!-- convers item -->
                <app-convers-item (onSelect)="selectConversItem($event)" />
            </div>
        </div>
    `
})
export class ConversListComponent implements OnInit {
    private conversService = inject(ConversService)

    ngOnInit() { }

    selectConversItem(id: string) {
        this.conversService.idConversSelected.set(id)
        this.conversService.selectedComponent.set('msg')
    }
}