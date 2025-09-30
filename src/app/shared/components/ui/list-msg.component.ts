import { Component, input, output } from "@angular/core";
import { IItemMsg, ItemMsgComponent } from "./item-msg.component";
import { EmojiData } from "@ctrl/ngx-emoji-mart/ngx-emoji";
import { TUniqId } from "../../types/uniq-id.type";

@Component({
    selector: 'app-list-msg',
    template: `
    <div class="lg:px-4 flex pt-1 pb-9 flex-col gap-13">
        <ng-content select="[msg-info]"></ng-content>
        @for (msg of msgList(); track msg.id) {
            <app-item-msg (removeReaction)="removeReaction.emit($event)" (addReaction)="addReaction.emit({id: msg.id, reaction: $event})" [msgItem]="msg" />
        }
    </div>`,
    imports: [ItemMsgComponent]
})
export class ListMsgComponent {
    msgList = input<IItemMsg[]>()
    addReaction = output<{id: TUniqId, reaction: string|EmojiData}>()
    removeReaction = output<TUniqId>()
}