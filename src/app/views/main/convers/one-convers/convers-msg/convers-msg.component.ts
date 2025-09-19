import { Component, computed, ElementRef, inject, OnInit, viewChild } from '@angular/core';
import { ConversService } from '../../../../../features/convers/convers.service';
import { HeaderConversMsgComponent } from '../../../../../shared/components/header-convers-msg.component';
import { ConversMsgFormComponent } from './components/convers-msg-form.component';
import { BreakpointService } from '../../../../../shared/services/breakpoint.service';
import { Router } from '@angular/router';
import { ListMsgComponent } from "../../../../../shared/components/list-msg.component";

@Component({
    selector: 'app-convers-msg',
    imports: [
    HeaderConversMsgComponent,
    ConversMsgFormComponent,
    ListMsgComponent
],
    template: `<div class="flex flex-col overflow-auto h-full w-full">
        <!-- header -->
        <app-header-convers-msg [hiddenInfoBtn]="hiddenBtnInfo()" (onGoToInfo)="goToConversInfo()" (onCancel)="cancel()" />

        <!-- msg list -->
        <div #chatContent class="px-2 lg:px-4 pt-3 flex flex-1 pb-9 flex-col gap-2 overflow-auto">
           <app-list-msg [idConvers]="idConvers"/>
        </div>

        <!-- footer -->
        <div class="w-full border-t border-surface p-2 py-3 flex justify-between items-center">
            <app-convers-msg-form class="w-full"/>
        </div>
    </div>`
})
export class ConversMsgComponent implements OnInit {
    private conversService = inject(ConversService)
    private router = inject(Router)
    private bpService = inject(BreakpointService)
    private chatContent = viewChild<ElementRef<HTMLElement>>('chatContent')
    idConvers = ''

    hiddenBtnInfo = computed<boolean>(() => !this.bpService.isMobile() && this.bpService.screenWidth() >= this.bpService.breakpoint.lg)

    ngOnInit() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.chatContent()
        if(element) element.nativeElement.scrollTop = element.nativeElement.scrollHeight
    }

    cancel() {
        const paths = this.router.url.split('/')
        const url = paths.filter(path => paths[paths.length - 1] !== path)
        console.log(url)
        this.router.navigateByUrl(url.join('/'))
    }

    goToConversInfo() {
        if(this.bpService.isMobile()) {
            this.router.navigateByUrl(this.router.url + '/info')
        }
        this.conversService.selectedComponent.set('info')
    }

}