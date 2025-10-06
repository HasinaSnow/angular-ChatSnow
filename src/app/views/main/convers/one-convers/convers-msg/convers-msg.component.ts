import { Component, computed, inject } from '@angular/core';
import { ConversService } from '../../convers.service';
import { HeaderConversMsgComponent } from '../../../../../shared/components/ui/header-convers-msg.component';
import { ConversMsgFormComponent } from './components/convers-msg-form.component';
import { BreakpointService } from '../../../../../shared/services/breakpoint.service';
import { Router } from '@angular/router';
import { ListMsgComponent } from '../../../../../shared/components/ui/list-msg.component';
import { OneConversStore } from '../../../../../core/stores/convers/one-convers.store';
import { AutoScrollBottomDirective } from '../../../../../shared/directives/auto-scroll-bottom.directive';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { TUniqId } from '../../../../../shared/types/uniq-id.type';

@Component({
    selector: 'app-convers-msg',
    imports: [
    HeaderConversMsgComponent,
    ConversMsgFormComponent,
    ListMsgComponent,
    AutoScrollBottomDirective
],
    template: `<div class="flex flex-col overflow-auto h-full w-full">
        <!-- header -->
        <app-header-convers-msg [hiddenInfoBtn]="hiddenBtnInfo()" (onGoToInfo)="goToConversInfo()" (onCancel)="cancel()" [headerConversMsg]="conversMsgHeader()" />

        <!-- msg list -->
        @if(msgItems().length === 0) {
            <div class="flex-1 flex items-center justify-center text-lg">
                <p class="w-[70%] flex flex-col text-color items-center text-center">
                    <i class="pi pi-comment text-primary" style="font-size: 2rem;"></i>
                    Send new message and chat with : 
                    <span class="font-semibold">{{conversMsg()?.name}}</span>
                </p>
            </div>
        } @else {
            <div autoScrollBottom class="px-2 lg:px-4 pt-3 flex flex-1 pb-9 flex-col gap-2 overflow-y-auto">
                <app-list-msg (removeReaction)="removeReaction($event)" (addReaction)="addReaction($event)" [msgList]="msgItems()"/>
            </div>
        }

        <!-- footer -->
        <div class="w-full border-t border-surface p-2 py-3 flex justify-between items-center">
            <app-convers-msg-form (onSendMsg)="addNewMsg($event)" class="w-full"/>
        </div>
    </div>`
})
export class ConversMsgComponent {
    private conversService = inject(ConversService)
    private router = inject(Router)
    private bpService = inject(BreakpointService)
    private store = inject(OneConversStore)

    conversMsg = this.store.oneConversMsg
    conversMsgHeader = this.store.conversMsgHeader
    msgItems = this.store.msgItems
    hiddenBtnInfo = computed<boolean>(() => !this.bpService.isMobile() && this.bpService.screenWidth() >= this.bpService.breakpoint.lg)

    addNewMsg(newMsg: string) {
        this.store.addMsg(newMsg)
        this.conversService.switchToConversView('list')
    }

    addReaction(creds : {id: TUniqId , reaction: string|EmojiData}) {
        this.store.addReaction(creds)
    }

    removeReaction(idMsg: TUniqId) {
        console.log('remove reaction', idMsg)
        this.store.removeReaction(idMsg)
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