import { Component, computed, inject, input, OnInit, output } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { PickerComponent } from "@ctrl/ngx-emoji-mart";
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
    selector: 'app-emoji-picker',
    template: `
        <emoji-mart
            [isNative]="true"
            (emojiSelect)="selectEmoji($event)"
            [showPreview]="false"
            [darkMode]="isDark()"
            [enableFrequentEmojiSort]="false"
            [enableSearch]="false" [style]="emojiMartStyle()"/>
    `,
    imports: [PickerComponent]
})
export class EmojiPickerComponent {
    isDark = inject(ThemeService).isDark
    emojiSelect = output<EmojiData>()
    onSelectEmoji = input<(emoji: EmojiData) => void>(() => {})

    emojiMartStyle = computed(() => {
            const change = this.isDark() 
                ? {background: 'var(--p-surface-950)'}
                : {background: 'var(--p-surface-0)'}
            return {
                ...change,
                border: '1px solid var(--p-content-border-color)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--p-text-color)',
                padding: '.5rem',
                zIndex: '100',
            } 
        })


    selectEmoji(value: any) {
        const selectedEmoji = value.emoji as EmojiData
        console.log(selectedEmoji)
        this.emojiSelect.emit(selectedEmoji)
        this.onSelectEmoji()(selectedEmoji)
    }
}