import { Component, inject, input } from "@angular/core";
import { IItemMsg, ItemMsgComponent } from "./item-msg.component";
import { ScrollService } from "../../services/scroll.service";
import { IMsgReaction } from "../reactions.component";

@Component({
    selector: 'app-list-msg',
    template: `
    <div class="lg:px-4 flex pt-1 pb-9 flex-col gap-3">
        <ng-content select="[msg-info]"></ng-content>
        @for (msg of msgList(); track $index) {
            <app-item-msg [msgItem]="msg" />
        }
    </div>`,
    imports: [ItemMsgComponent]
})
export class ListMsgComponent {
    msgList = input<IItemMsg[]>()

    reactions: IMsgReaction[] = [
        {
            author: {
                id: 'hasina_id',
                name: 'Hasina Niaina',
                imgUrl: 'img-url'
            },
            emoji: 'smile'
        },
        {
            author: {
                id: 'anthony_id',
                name: 'Mark Anthony',
                imgUrl: 'img-url'
            },
            emoji: 'smile'
        },
        {
            author: {
                id: 'any_id',
                name: 'User',
                imgUrl: 'img-url'
            },
            emoji: 'smile'
        },
    ]

}