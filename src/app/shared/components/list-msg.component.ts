import { Component, ElementRef, inject, viewChild } from "@angular/core";
import { MsgItemComponent } from "../../views/main/convers/one-convers/convers-msg/components/msg-item.component";
import { ScrollService } from "../services/scroll.service";

@Component({
    selector: 'app-list-msg',
    template: `
    <div #chatContent class="lg:px-4 flex pb-9 flex-col gap-2 overflow-auto">
        <ng-content select="[msg-info]"></ng-content>
        <app-msg-item/>
        <app-msg-item/>
        <app-msg-item/>
        <app-msg-item/>
        <app-msg-item/>
    </div>`,
    imports: [MsgItemComponent]
})
export class ListMsgComponent {
    private chatContent = viewChild<ElementRef<HTMLElement>>('chatContent')
    private scrollService = inject(ScrollService)

    ngOnInit() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.chatContent()
        if(element) this.scrollService.scrollToBottom(element)
    }
}