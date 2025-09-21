import { Component, computed, inject, input, OnInit, viewChild } from '@angular/core';
import { EmojiComponent, EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AvatarModule } from 'primeng/avatar';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Message } from "primeng/message";
import { IMsgReaction, ReactionsComponent } from '../../../../../../shared/components/reactions.component';
import { BreakpointService } from '../../../../../../shared/services/breakpoint.service';
import { PopupComponent } from "../../../../../../shared/components/popup.component";
import { PopupService } from '../../../../../../shared/services/popup.service';
import { MsgOptionsComponent } from "../../../../../../shared/components/msg-option.component";

@Component({
    selector: 'app-msg-item',
    imports: [AvatarModule, Message, EmojiComponent, PopupComponent, MsgOptionsComponent],
    template: `
    @if(isReceived()) {
        <div class="flex items-start gap-2 w-fit max-w-[75%]">
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
                                {{replyToMessage()}}
                            </p>
                        </div>
                        <div class="relative flex justify-end">
                            <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass=" cursor-pointerrelative pb-0.5 w-fit !bg-surface-0 dark:!bg-surface-950 relative z-10 max-w-full" severity="primary">
                                {{message()}}
                            </p-message>
                            @if(reactions().length > 0) {
                                <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface dark:!bg-surface-950">
                                    <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                        @for (emoji of reactionEmojis(); track $index) {
                                            <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                        }
                                        {{reactions().length}}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            } @else {
                <div class="relative flex justify-end">
                    <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer !bg-surface-0 pb-0.5 dark:!bg-surface-950" severity="secondary">
                        {{message()}}
                    </p-message>
                    @if(reactions().length > 0) {
                        <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-100 dark:!bg-surface-950">
                            <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                @for (emoji of reactionEmojis(); track $index) {
                                    <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                }
                                {{reactions().length}}
                            </span>
                        </div>
                    }
                </div>
            }
        </div>
    } @else {
        <div class="flex flex-row-reverse py-1 ml-auto items-start gap-2 w-fit max-w-[75%]">
            @if(replyToMessage()) {
                <div class="mt-1">
                    <small class="text-muted-color px-2 flex items-center gap-2">
                        <i class="pi pi-undo" style="font-size: .8rem;"></i>
                        <strong>Vous</strong> avez répondu à <strong>Hari</strong>
                    </small>
                    <div class="flex-1 w-full mt-6 pt-3 relative">
                        <div class="absolute right-0 z-0 -top-5 pb-4 w-fit border border-surface rounded-bl-2xl rounded-t-2xl">
                            <p class="w-full line-clamp-1 text-sm text-muted-color px-3 pt-1">
                                {{replyToMessage()}}
                            </p>
                        </div>
                        <div class="relative flex justify-end">
                            <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer w-fit pb-0.5 !bg-surface-300 dark:!bg-surface-800 relative z-10 max-w-full" severity="secondary">
                                {{message()}}
                            </p-message>
                            @if(reactions().length > 0) {
                                <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-300 dark:!bg-surface-800">
                                    <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                        @for (emoji of reactionEmojis(); track $index) {
                                            <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                        }
                                        {{reactions().length}}
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            } @else {
                <div class="relative flex justify-end">
                    <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer relative pb-0.5 !bg-surface-0 dark:!bg-surface-950">
                        {{message()}}
                    </p-message>
                    @if(reactions().length > 0) {
                        <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-300 dark:!bg-surface-800">
                            <span (click)="openReactions()" class="flex-row-reverse flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                @for (emoji of reactionEmojis(); track $index) {
                                    <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                }
                                {{reactions().length}}
                            </span>
                        </div>
                    }
                </div>
            }

        </div>
    }

    <app-popup #popupMsgOptions>
        <div popupContent>
            <app-msg-options (onClosePopupOptions)="closePopupOptions()" [isReceived]="isReceived()"></app-msg-options>
        </div>
    </app-popup>
    `
})
export class MsgItemComponent implements OnInit {
    isReceived = input.required<boolean>()
    replyToMessage = input<string>()
    message = input.required<string>()
    reactions = input<IMsgReaction[]>([])
    withInteraction = input<boolean>()
    reactionEmojis = computed(() => [...new Set(this.reactions().map(reaction => reaction.emoji))])

    private bpService = inject(BreakpointService)
    private dialogService = inject(DialogService)
    ref: DynamicDialogRef|undefined

    popupMsgOptions = viewChild<PopupComponent|undefined>('popupMsgOptions')
    private popupService = inject(PopupService)

    ngOnInit() { }

    openReactions() {
        this.ref = this.dialogService.open(ReactionsComponent, {
            header: 'Reactions',
            inputValues: {
                reactions: this.reactions
            },
            modal: true,
            closable: true,
            position: this.bpService.isMobile() ? 'bottom' : undefined,
            breakpoints: {
                '1024px': '60vw',
                '640px': '95vw',
            }
        })
    }

    togglePopupMsgOptions($event: MouseEvent) {
        console.log('popup msg option')
        if(this.withInteraction())
            this.popupService.togglePopup(this.popupMsgOptions, $event, this.isReceived() ? 'bottom-right': 'bottom-left')
    }

    closePopupOptions(){
        this.popupService.closePopup(this.popupMsgOptions)
    }
}