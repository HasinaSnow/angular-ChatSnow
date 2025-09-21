import { Component, computed, inject, OnInit, signal, viewChild, WritableSignal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { PopupComponent } from '../../../../../../shared/components/ui/popup.component';
import { BreakpointService } from '../../../../../../shared/services/breakpoint.service';
import { PopupService } from '../../../../../../shared/services/popup.service';
import { PickerComponent } from '@ctrl/ngx-emoji-mart'
import { EmojiComponent, EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { ThemeService } from '../../../../../../shared/services/theme.service';
import { FormsModule } from '@angular/forms';
import { EmojiPickerComponent } from "../../../../../../shared/components/ui/emoji-picker.component";

@Component({
    selector: 'app-convers-msg-form',
    imports: [FormsModule, ButtonModule, TextareaModule, PopupComponent, EmojiPickerComponent],
    template: `
    <div class="flex w-full items-center gap-1">
        <p-button icon="pi pi-paperclip" severity="secondary" class="p-0" variant="text"></p-button>
        <p-button (onClick)="togglePopupEmoji($event)" icon="pi pi-face-smile" severity="secondary" variant="text"></p-button>
        <textarea rows="1" cols="30" class="ml-1 flex-1 border-0 resize-none shadow-none p-2 overflow-hidden h-[45px] max-h-[90px] bg-emphasis overflow-w-auto" autoResize="true" [(ngModel)]="msgText" pTextarea placeholder="Your message..."></textarea>
        <p-button icon="pi pi-send" severity="primary"></p-button>

        <!-- popups -->
        <app-popup #popupEmojiPicker>
            <div popupContent class="shadow-lg z-50">
                <app-emoji-picker (emojiSelect)="pushEmoji($event)"></app-emoji-picker>
            </div>
        </app-popup>
    </div>`
})
export class ConversMsgFormComponent implements OnInit {
    popupEmojiPicker = viewChild<PopupComponent|undefined>('popupEmojiPicker')
    private popupService = inject(PopupService)

    msgText: WritableSignal<string> = signal('')

    ngOnInit() { }

    togglePopupEmoji($event: MouseEvent) {
        console.log('popup emoji')
        this.popupService.togglePopup(this.popupEmojiPicker, $event, 'top-right')
    }

    pushEmoji(value: any) {
        const selectedEmoji = value.emoji as EmojiData
        console.log(selectedEmoji)
        this.msgText.update(text => text + selectedEmoji.native)
    }
}