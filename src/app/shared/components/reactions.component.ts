import { Component, input, OnInit, output, Signal } from '@angular/core';
import { EmojiData, EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { Avatar } from "primeng/avatar";
import { Button } from "primeng/button";

export interface IMsgReaction {
    author: {
        id: string,
        name: string,
        imgUrl: string
    },
    emoji: string|EmojiData,
    removable: boolean
}
@Component({
    selector: 'app-reactions',
    template: `
        <div class="lg:w-[25vw] max-h-[50vh] overflow-auto">
            @for (reaction of reactions(); track $index) {
                <div class="flex items-center py-2 gap-4 justify-between">
                    <div class="flex gap-2 items-center">
                        <p-avatar image="{{reaction.author.imgUrl}}" size="large" shape="circle"/>
                        <span class="font-semibod text-color">{{reaction.author.name}}</span>
                    </div>
                    <div class="flex gap-1 items-center">
                        <ngx-emoji [size]="24" [isNative]="true" [emoji]="reaction.emoji" ></ngx-emoji>
                        @if(reaction.removable) {
                            <p-button (onClick)="onRemoveReaction()()" icon="pi pi-trash" size="small" severity="secondary" styleClass="m-0" [outlined]="true"></p-button>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    imports: [EmojiComponent, Avatar, Button]
})
export class ReactionsComponent {
    reactions = input.required<IMsgReaction[]>()
    onRemoveReaction = input<() => void>(() => {})

}