import { Component, ElementRef, inject, input, signal, viewChild } from "@angular/core";
import { IItemMsg, ItemMsgComponent } from "./item-msg.component";
import { ScrollService } from "../../services/scroll.service";
import { IMsgReaction } from "../reactions.component";

@Component({
    selector: 'app-list-msg',
    template: `
    <div #chatContent class="lg:px-4 flex pt-1 pb-9 flex-col gap-3 overflow-auto">
        <ng-content select="[msg-info]"></ng-content>
        @for (msg of msgList(); track $index) {
            <app-item-msg [withInteraction]="msg.withInteraction" [reactions]="reactions" [msg]="msg.msg" [isReceived]="msg.isReceived"/>
        }
    </div>`,
    imports: [ItemMsgComponent]
})
export class ListMsgComponent {
    private chatContent = viewChild<ElementRef<HTMLElement>>('chatContent')
    private scrollService = inject(ScrollService)

    msgList = input<IItemMsg[]>()
    interaction = signal<boolean>(true)

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

    ngOnInit() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.chatContent()
        if(element) this.scrollService.scrollToBottom(element)
    }
}