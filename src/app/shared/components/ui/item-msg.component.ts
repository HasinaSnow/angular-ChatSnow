import { Component, computed, inject, input, OnInit, output, viewChild } from '@angular/core';
import { EmojiComponent, EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AvatarModule } from 'primeng/avatar';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Message } from "primeng/message";
import { IMsgReaction, ReactionsComponent } from '../reactions.component';
import { BreakpointService } from '../../services/breakpoint.service';
import { PopupComponent } from "./popup.component";
import { PopupService } from '../../services/popup.service';
import { MsgOptionsComponent } from "../msg-option.component";
import { TUniqId } from '../../types/uniq-id.type';
import { IReplyToMsg, TMsgType } from '../../../core/entities/msg.entity';
import { IConversPrtcipant } from '../../../core/entities/convers.entity';
import { LittleNamePipe } from '../../pipes/little-name.pipe';

export interface IItemMsg {
    isReceived: boolean,
    content: string,
    reactions: IMsgReaction[],
    withInteraction: boolean,
    id: TUniqId,
    type: TMsgType,
    seenBy: IConversPrtcipant[],
    idConvers: TUniqId,
    author: IConversPrtcipant,
    replyToMsg: IReplyToMsg|null, // permet de repondre à un message spécifique
    attachments: string[],
    timestamp: Date,
}

@Component({
    selector: 'app-item-msg',
    imports: [AvatarModule, Message, EmojiComponent, PopupComponent, MsgOptionsComponent, LittleNamePipe],
    template: `
    @if(msgItem().isReceived) {
        <div class="flex items-start gap-2 w-fit max-w-[75%]">
            <div class="flex items-center gap-2 py-1 sticky top-0 transition-all">
                <p-avatar image="{{msgItem().author.urlAvatar ?? './images/pdp1.png'}}" styleClass="h-10 w-10 text-sm font-medium" size="normal" shape="circle"/>
            </div>
            @if(msgItem().replyToMsg) {
                <div class="mt-1">
                    <small class="text-muted-color px-2 flex items-center gap-2">
                        <i class="pi pi-undo" style="font-size: .8rem;"></i>
                        <strong>{{ msgItem().author.name | littleName }}</strong> a répondu à <strong>{{ msgItem().replyToMsg?.author | littleName}}</strong>
                    </small>
                    <div class="flex-1 w-full mt-6 pt-3 relative">
                        <div class="absolute z-0 -top-5 pb-4 w-fit border border-surface rounded-br-2xl rounded-t-2xl">
                            <p class="w-full line-clamp-1 text-sm text-muted-color px-3 pt-1">
                                {{msgItem().replyToMsg?.content}}
                            </p>
                        </div>
                        <div class="relative flex justify-end">
                            <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer pb-0.5 w-fit !shadow-md !text-color !bg-surface-0 dark:!bg-surface-950 relative z-10 max-w-full" severity="secondary">
                                {{msgItem().content}}
                            </p-message>
                            @if(msgItem().reactions.length > 0) {
                                <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-100 dark:!bg-surface-950">
                                    <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                        <div>
                                            @for (emoji of reactionEmojis(); track $index) {
                                                <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                            }
                                        </div>
                                        <div>
                                            {{msgItem().reactions.length}}
                                        </div>
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            } @else {
                <div class="relative flex flex-col justify-end">
                    <small class="text-muted-color px-2 my-1 flex items-center gap-2">
                        <strong>{{ msgItem().author.name | littleName }}</strong>
                    </small>
                    <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer !shadow-md !text-color !bg-surface-0 pb-0.5 dark:!bg-surface-950" severity="secondary">
                        {{msgItem().content}}
                    </p-message>
                    @if(msgItem().reactions.length > 0) {
                        <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-100 dark:!bg-surface-950">
                            <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                <div>
                                    @for (emoji of reactionEmojis(); track $index) {
                                        <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                    }
                                </div>
                                <div>
                                    {{msgItem().reactions.length}}
                                </div>
                            </span>
                        </div>
                    }
                </div>
            }
        </div>
    } @else {
        <div class="flex flex-row-reverse py-1 ml-auto items-start gap-2 w-fit max-w-[75%]">
            @if(msgItem().replyToMsg) {
                <div class="mt-1">
                    <small class="text-muted-color px-2 flex items-center gap-2">
                        <i class="pi pi-undo" style="font-size: .8rem;"></i>
                        <strong>{{ msgItem().author.name | littleName }}</strong> avez répondu à <strong>{{ msgItem().replyToMsg?.author | littleName}}</strong>
                    </small>
                    <div class="flex-1 w-full mt-6 pt-3 relative">
                        <div class="absolute right-0 z-0 -top-5 pb-4 w-fit border border-surface rounded-bl-2xl rounded-t-2xl">
                            <p class="w-full line-clamp-1 text-sm text-muted-color px-3 pt-1">
                                {{msgItem().replyToMsg?.content}}
                            </p>
                        </div>
                        <div class="relative flex justify-end">
                            <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer w-fit pb-0.5 !shadow-md !text-color !bg-surface-300 dark:!bg-surface-800 relative z-10 max-w-full" severity="secondary">
                                {{msgItem().content}}
                            </p-message>
                            @if(msgItem().reactions.length > 0) {
                                <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-300 dark:!bg-surface-800">
                                    <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                        <div>
                                            @for (emoji of reactionEmojis(); track $index) {
                                                <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                            }
                                        </div>
                                        <div>
                                            {{msgItem().reactions.length}}
                                        </div>
                                    </span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            } @else {
                <div class="relative flex justify-end">
                    <p-message (click)="togglePopupMsgOptions($event)" size="small" styleClass="cursor-pointer w-fit pb-0.5 !text-color !shadow-md !bg-surface-300 dark:!bg-surface-800 relative z-10 max-w-full" severity="secondary">
                        {{msgItem().content}}
                    </p-message>
                    @if(msgItem().reactions.length > 0) {
                        <div class="absolute z-100 w-fit -bottom-6 rounded-full right-0 border border-surface px-1 text-color bg-surface-300 dark:!bg-surface-800">
                            <span (click)="openReactions()" class="flex cursor-pointer gap-1 items-center pt-0.5 pb-1 text-xs font-bold">
                                <div>
                                    @for (emoji of reactionEmojis(); track $index) {
                                        <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                                    }
                                </div>
                                <div>
                                    {{msgItem().reactions.length}}
                                </div>
                            </span>
                        </div>
                    }
                </div>
            }
        </div>
    }

    <app-popup #popupMsgOptions>
        <div popupContent>
            <app-msg-options
            (onSelectEmoji)="addReaction.emit($event)"
            (onClosePopupOptions)="closePopupOptions()"
            [isReceived]="msgItem().isReceived"
            ></app-msg-options>
        </div>
    </app-popup>
    `
})
export class ItemMsgComponent {
    msgItem = input.required<IItemMsg>()
    addReaction = output<string|EmojiData>()
    removeReaction = output<TUniqId>()

    reactionEmojis = computed(() => [...new Set(this.msgItem().reactions.map(reaction => reaction.emoji))])
    private bpService = inject(BreakpointService)
    private dialogService = inject(DialogService)
    ref: DynamicDialogRef|undefined

    popupMsgOptions = viewChild<PopupComponent|undefined>('popupMsgOptions')
    private popupService = inject(PopupService)

    openReactions() {
        this.ref = this.dialogService.open(ReactionsComponent, {
            header: 'Reactions',
            inputValues: {
                reactions: this.msgItem().reactions,
                onRemoveReaction: () => {
                    this.ref?.close()
                    this.removeReaction.emit(this.msgItem().id)
                }
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
        if(this.msgItem().withInteraction)
            this.popupService.togglePopup(this.popupMsgOptions, $event, this.msgItem().isReceived ? 'bottom-right': 'bottom-left')
    }

    closePopupOptions(){
        this.popupService.closePopup(this.popupMsgOptions)
    }
}