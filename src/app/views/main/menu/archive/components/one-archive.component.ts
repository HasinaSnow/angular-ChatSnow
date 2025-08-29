import { Component, ElementRef, inject, OnInit, viewChild } from "@angular/core";
import { HeaderConversMsgComponent } from "../../../../../shared/components/header-convers-msg.component";
import { ListMsgComponent } from "../../../../../shared/components/list-msg.component";
import { Button } from "primeng/button";
import { Router } from "@angular/router";
import { ScrollService } from "../../../../../shared/services/scroll.service";
import { BreakpointService } from "../../../../../shared/services/breakpoint.service";
import { Location } from "@angular/common";
import { ArchiveService } from "../archive.service";

@Component({
    selector: 'app-one-archive',
    imports: [HeaderConversMsgComponent, ListMsgComponent, Button],
    template: `
    <div class="flex-1 flex flex-col gap-2 overflow-auto h-full w-full">
        <app-header-convers-msg (onGoToInfo)="goToInfo()" (onCancel)="cancel()" />
        <div #msgList class="flex-1 overflow-auto px-2">
            <app-list-msg/>
        </div>
        <div class="flex flex-col gap-2 p-2 w-full text-center">
            <div>
                <p class="w-full text-color">
                    Vous ne pouvez plus envoyer de message à ce groupe. 
                </p>
                <p class="w-full text-muted-color text-sm">
                    Vous ne faite plus partie de ce groupe. vous ne pouvez donc ni envoyer ni recevoir d'appels ou de messages, sauf si vous réintégrez le groupe
                </p>
            </div>
            <p-button icon="pi pi-trash" label="Delete the conversation" severity="danger" styleClass=""></p-button>
        </div>
    </div>
    `
})
export class OneArchiveComponent implements OnInit {
    private msgList = viewChild<ElementRef<HTMLElement>>('msgList')
    private router = inject(Router)
    private location = inject(Location)
    private scrollService = inject(ScrollService)
    private archiveService = inject(ArchiveService)
    private bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint

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
            this.archiveService.swicthToComponent('list')
    }

    goToInfo() {
        const url = this.router.url
        this.router.navigateByUrl(url + '/info')
    }
}