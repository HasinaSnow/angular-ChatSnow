import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-convers-msg-form',
    imports: [ButtonModule, TextareaModule],
    template: `
    <div class="flex w-full items-center gap-1">
        <p-button icon="pi pi-paperclip" severity="secondary" class="p-0" variant="text"></p-button>
        <p-button icon="pi pi-face-smile" severity="secondary" variant="text"></p-button>
        <textarea rows="1" cols="30" class="ml-1 flex-1 border-0 resize-none shadow-none p-2 overflow-hidden h-[45px] max-h-[90px] bg-emphasis overflow-w-auto" autoResize="true" pTextarea placeholder="Your message..."></textarea>
        <p-button icon="pi pi-send" severity="primary"></p-button>
    </div>`
})
export class ConversMsgFormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}