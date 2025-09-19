import { Component, ElementRef, inject, input, viewChild } from "@angular/core";
import { MsgItemComponent } from "../../views/main/convers/one-convers/convers-msg/components/msg-item.component";
import { ScrollService } from "../services/scroll.service";

@Component({
    selector: 'app-list-msg',
    template: `
    <div #chatContent class="lg:px-4 flex pt-1 pb-9 flex-col gap-2 overflow-auto">
        <ng-content select="[msg-info]"></ng-content>
        <app-msg-item [isReceived]="true"/>
        <app-msg-item [replyToMessage]="'dflk'" [isReceived]="true"/>
        <app-msg-item [isReceived]="false"/>
        <app-msg-item [isReceived]="true"/>
    </div>`,
    imports: [MsgItemComponent]
})
export class ListMsgComponent {
    private chatContent = viewChild<ElementRef<HTMLElement>>('chatContent')
    private scrollService = inject(ScrollService)
    idConvers = input<string>()

    ngOnInit() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.chatContent()
        if(element) this.scrollService.scrollToBottom(element)
    }
}