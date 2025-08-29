import { Component, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { Location } from '@angular/common';
import { ConversService } from '../../../../../features/convers/convers.service';
import { HeaderConversMsgComponent } from '../../../../../shared/components/header-convers-msg.component';
import { ConversMsgFormComponent } from './components/convers-msg-form.component';
import { MsgItemComponent } from './components/msg-item.component';

@Component({
    selector: 'app-convers-msg',
    imports: [
        HeaderConversMsgComponent,
        MsgItemComponent,
        ConversMsgFormComponent
    ],
    template: `<div class="flex flex-col overflow-auto h-full w-full">
        <!-- header -->
        <app-header-convers-msg (onGoToInfo)="goToConversInfo()" (onCancel)="cancel()" />

        <!-- msg list -->
        <div #chatContent class="px-2 lg:px-4 pt-3 flex flex-1 pb-9 flex-col gap-2 overflow-auto">
           <app-msg-item/>
           <app-msg-item/>
           <app-msg-item/>
           <app-msg-item/>
           <app-msg-item/>
        </div>

        <!-- footer -->
        <div class="w-full border-t border-surface p-2 py-3 flex justify-between items-center">
            <app-convers-msg-form class="w-full"/>
        </div>
    </div>`
})
export class ConversMsgComponent implements OnInit {
    private conversService = inject(ConversService)
    private location = inject(Location)
    private chatContent = viewChild<ElementRef<HTMLElement>>('chatContent')

    ngOnInit() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.chatContent()
        if(element) element.nativeElement.scrollTop = element.nativeElement.scrollHeight
    }

    cancel() {this.location.back()}

    goToConversInfo() {
        this.conversService.selectedComponent.set('info')
    }

}