import { Component, input, OnInit, Signal } from '@angular/core';
import { EmojiData, EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { Avatar } from "primeng/avatar";

export interface IMsgReaction {
    author: {
        id: string,
        name: string,
        imgUrl: string
    },
    emoji: string|EmojiData
}
@Component({
    selector: 'app-reactions',
    template: `
        <div class="lg:w-[25vw] max-h-[50vh] overflow-auto">
            @for (reaction of reactions()(); track $index) {
                <div class="flex items-center py-2 gap-4 justify-between">
                    <div class="flex gap-2 items-center">
                        <p-avatar image="./favicon.ico" size="large" shape="circle"/>
                        <span class="font-semibod text-color">{{reaction.author.name}}</span>
                    </div>
                    <ngx-emoji [size]="24" [isNative]="true" [emoji]="reaction.emoji" ></ngx-emoji>
                </div>
            }
        </div>
    `,
    imports: [EmojiComponent, Avatar]
})
export class ReactionsComponent implements OnInit {
    reactions = input.required<Signal<IMsgReaction[]>>()

    ngOnInit() { }
}