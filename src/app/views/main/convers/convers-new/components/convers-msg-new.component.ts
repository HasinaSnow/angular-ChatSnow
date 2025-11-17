import { Component, computed, inject } from '@angular/core';
import { HeaderConversMsgComponent, IHeaderConversMsg } from '../../../../../shared/components/ui/header-convers-msg.component';
import { ConversMsgFormComponent } from '../../one-convers/convers-msg/components/convers-msg-form.component';
import { BreakpointService } from '../../../../../shared/services/breakpoint.service';
import { ConversStore } from '../../../../../core/stores/convers/convers.store';
import { Router } from '@angular/router';
import { ConversService } from '../../convers.service';
import { TUniqId } from '../../../../../shared/types/uniq-id.type';

@Component({
    selector: 'app-convers-msg-new',
    imports: [HeaderConversMsgComponent, ConversMsgFormComponent],
    template: `
    <div class="flex flex-col overflow-auto h-full w-full">
        <!-- header -->
        <app-header-convers-msg [hiddenInfoBtn]="hiddenBtnInfo()" (onGoToInfo)="goToConversInfo()" (onCancel)="cancel()" [headerConversMsg]="headerConversMsg()" />

        <!-- msg list -->
        <div class="flex-1 flex items-center justify-center text-lg">
            <p class="w-[70%] flex flex-col text-color items-center text-center">
                <i class="pi pi-comment text-primary" style="font-size: 2rem;"></i>
                Send new message and chat with : 
                <span class="font-semibold">{{newConversUser()?.name}}</span>
            </p>
        </div>

        <!-- footer -->
        <div class="w-full border-t border-surface p-2 py-3 flex justify-between items-center">
            <app-convers-msg-form (onSendMsg)="addNewMsg($event)" class="w-full"/>
        </div>
    </div>
    `
})
export class ConversMsgNewComponent {
    private router = inject(Router)

    private conversService = inject(ConversService)
    private bpService = inject(BreakpointService)

    private store = inject(ConversStore)
    newConversUser = this.store.newConversUser
    headerConversMsg = computed<IHeaderConversMsg>(() => {
        const user = this.newConversUser()
        return {
            urlAvatar: user?.urlAvatar ?? null,
            name: user?.name ?? 'zrrorName',
            members: ['you', user?.name ?? 'errorName']
        }
    })

    hiddenBtnInfo = computed<boolean>(() => !this.bpService.isMobile() && this.bpService.screenWidth() >= this.bpService.breakpoint.lg)


    addNewMsg(msgContent: string) {
        this.store.createWithNewMsg({idUser: this.newConversUser()?.idUser as TUniqId, msgContent})
        this.conversService.switchToConversView('list')
    }

    cancel() {
        const paths = this.router.url.split('/')
        const url = paths.filter(path => paths[paths.length - 1] !== path)
        this.router.navigateByUrl(url.join('/'))
    }

    goToConversInfo() {
        if(this.bpService.isMobile()) {
            this.router.navigateByUrl(this.router.url + '/info')
        }
        this.conversService.selectedComponent.set('info')
    }

}