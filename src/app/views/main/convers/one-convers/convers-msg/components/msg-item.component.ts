import { Component, input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Message } from "primeng/message";

@Component({
    selector: 'app-msg-item',
    imports: [AvatarModule, Message],
    template: `
    @if(isReceived()) {
        <div class="flex items-start gap-2 w-full max-w-[75%]">
            <div class="flex items-center gap-2 py-1 sticky top-0 transition-all">
                <p-avatar image="./favicon.ico" styleClass="h-10 w-10 text-sm font-medium" size="normal" shape="circle"/>
            </div>
            @if(replyToMessage()) {
                <div class="mt-1">
                    <small class="text-muted-color px-2 flex items-center gap-2">
                        <i class="pi pi-undo" style="font-size: .8rem;"></i>
                        <strong>Marc h.</strong> a répondu à <strong>Hari</strong>
                    </small>
                    <div class="flex-1 w-full mt-6 pt-3 relative">
                        <div class="absolute z-0 -top-5 pb-4 w-fit border border-surface rounded-br-2xl rounded-t-2xl">
                            <p class="w-full line-clamp-1 text-sm text-muted-color px-3 pt-1">
                                bonjour, cava?
                            </p>
                        </div>
                            <p-message size="small" styleClass="w-fit !bg-surface-0 dark:!bg-surface-950 relative z-10 max-w-full" severity="secondary">
                                    bonjour, oui çavà. Et toi?
                            </p-message>
                    </div>
                </div>
            } @else {
                <p-message size="small" styleClass="!bg-surface-0 dark:!bg-surface-950" severity="secondary">
                    lorem ipsum
                </p-message>
            }
        </div>
    } @else {
        <div class="flex flex-row-reverse py-1 ml-auto items-start gap-2 w-fit max-w-[75%]">
            <p-message size="small" severity="secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis incidunt aspernatur consequatur facilis reiciendis cum atque iusto sed cumque adipisci autem corporis architecto nisi voluptas, excepturi amet at soluta nemo.
            </p-message>
        </div>
    }
    `
})
export class MsgItemComponent implements OnInit {
    isReceived = input.required<boolean>()
    replyToMessage = input<string>()

    ngOnInit() { }
}