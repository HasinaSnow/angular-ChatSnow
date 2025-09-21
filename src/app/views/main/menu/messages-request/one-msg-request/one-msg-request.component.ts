import { Component, computed, ElementRef, inject, viewChild } from "@angular/core";
import { Location } from "@angular/common";
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollService } from "../../../../../shared/services/scroll.service";
import { Button } from "primeng/button";
import { MessageModule } from 'primeng/message';
import { Router } from "@angular/router";
import { HeaderConversMsgComponent } from "../../../../../shared/components/ui/header-convers-msg.component";
import { BreakpointService } from "../../../../../shared/services/breakpoint.service";
import { MsgRequestService } from "../msg-request.service";
import { ListMsgComponent } from "../../../../../shared/components/ui/list-msg.component";

@Component({
    selector: 'app-one-msg-request',
    imports: [HeaderConversMsgComponent, PanelModule, ScrollPanelModule, ListMsgComponent, Button, MessageModule],
    template: `
    <div class="flex-1 flex flex-col gap-2 overflow-auto h-full w-full">
        <app-header-convers-msg [withCancel]="withCancel()" (onGoToInfo)="goToInfo()" (onCancel)="cancel()" />
        <div #msgList class="flex-1 overflow-auto px-2">
            <app-list-msg>
                <p-message size="small" msg-info severity="info" class="m-1">
                    <div class="text-color font-normale max-md:text-sm">
                        <p class="">Vous n'êtes pas ami(e) ou vous avez été ajouté(e) par un membre dont vous n'êtes pas ami(e).</p>
                        <p class="">3 amis en commun ou 3 amis membres de la discussion.</p>
                    </div>
                </p-message>
            </app-list-msg>
        </div>
        <div class="flex flex-col gap-2 p-2">
            <p class="w-full text-muted-color max-md:text-sm text-center">
                Vous pouvez accepter ou refuser la demande de message. Si vous acceptez, vous pourrez participer à la conversation.
            </p>
            <div class="flex w-full items-center gap-1">
                <p-button label="Quitter" severity="danger" class="flex-1" styleClass=" w-full" [outlined]="true"></p-button>
                <p-button label="Delete" severity="danger" class="flex-1" styleClass="w-full" [outlined]="true"></p-button>
                <p-button label="Accept" severity="contrast" class="flex-1" styleClass=" w-full"></p-button>
            </div>
        </div>
    </div>`
})
export class OneMsgRequestComponent {
    private location = inject(Location)
    private router = inject(Router)
    private msgList = viewChild<ElementRef<HTMLElement>>('msgList')
    private scrollService = inject(ScrollService)
    private msgRqService = inject(MsgRequestService)
    private bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint
    withCancel = computed(() => this.bpService.isMobile() || this.bpService.screenWidth() <= this.bp.lg)

    ngOnInit() {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.msgList()
        if(element) this.scrollService.scrollToBottom(element)
    }

    cancel() {
        if(this.bpService.isMobile())
            this.location.back()
        else if(this.bpService.screenWidth() <= this.bp.lg)
            this.msgRqService.swicthToComponent('list')
    }

    goToInfo() {
        const url = this.router.url
        this.router.navigateByUrl(url + '/info')
    }
}