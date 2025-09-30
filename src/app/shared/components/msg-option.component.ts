import { Component, inject, input, output, viewChild } from '@angular/core';
import { Button } from "primeng/button";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PopupComponent } from './ui/popup.component';
import { PopupService } from '../services/popup.service';
import { EmojiData, EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { EmojiPickerComponent } from './ui/emoji-picker.component';

@Component({
    selector: 'app-msg-options',
    template: `
        <div class="{{isReceived() ? 'flex-row':'flex-row-reverse'}} flex gap-2 items-center mt-0.5">
            <p-button (onClick)="toggleReactionEmojis($event)" icon="pi pi-face-smile" severity="secondary" rounded="true" size="small" variant="outlined"></p-button>
            <p-button icon="pi pi-refresh" severity="secondary" rounded="true" size="small" variant="outlined"></p-button>
            <p-button icon="pi pi-ellipsis-h" severity="secondary" rounded="true" size="small" variant="outlined"></p-button>
        </div>

        <app-popup #popupReactionEmoji>
            <div popupContent class="bg-transparent z-50 flex gap-2 items-center">
                @for (emoji of reactionEmojis(); track $index) {
                    <p-button severity="secondary" rounded="true" styleClass="bg-green-500" size="small">
                        <ngx-emoji [size]="17" [isNative]="true" [emoji]="emoji" ></ngx-emoji>
                    </p-button>
                }
                <p-button (onClick)="openEmojiPicker()" icon="pi pi-plus" severity="secondary" rounded="true" size="small"></p-button>
            </div>
        </app-popup>
    `,
    imports: [Button, PopupComponent, EmojiComponent]
})
export class MsgOptionsComponent {
    ref: DynamicDialogRef|undefined
    private dialogService = inject(DialogService)
    onClosePopupOptions = output()

    isReceived = input.required<boolean>()
    reactionEmojis = input<(string|EmojiData)[]>(['smile', 'smile', 'smile', 'smile'])

    private popupService = inject(PopupService)
    popupReactionEmoji = viewChild<PopupComponent|undefined>('popupReactionEmoji')

    toggleReactionEmojis($event: MouseEvent) {
        this.popupService.togglePopup(this.popupReactionEmoji,  $event, this.isReceived() ? 'bottom-right' : 'bottom-left')
    }

    openEmojiPicker() {
        this.closeAllPopups()
        this.ref = this.dialogService.open(EmojiPickerComponent, {
            header: 'Reactions',
            modal: true,
            closable: true,
            closeOnEscape: true,
            inputValues: {
                onSelectEmoji: (emoji: EmojiData) => {
                    console.log('on select emoji =>', emoji)
                    this.ref?.close()
                }
            }

        })
    }

    closeAllPopups() {
        this.onClosePopupOptions.emit()
        this.popupService.closePopup(this.popupReactionEmoji)
    }
}