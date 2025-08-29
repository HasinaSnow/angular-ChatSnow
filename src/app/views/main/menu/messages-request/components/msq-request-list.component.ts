import { Component, inject, OnInit, signal } from "@angular/core";
import { ItemConversComponent } from "../../../../../shared/components/item-convers.component";
import { Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { Message } from "primeng/message";
import { BreakpointService } from "../../../../../shared/services/breakpoint.service";
import { ISelectMenuBarOptions, SelectMenubarComponent } from "../../../../../shared/components/select-menubar.component";
import { MsgRequestService } from "../msg-request.service";

@Component({
    selector: 'app-msg-request-list',
    imports: [
        ItemConversComponent,
        FormsModule,
        Message,
        SelectMenubarComponent
    ],
    template: `
    <div class="pl-1 w-full h-full flex flex-col gap-2 overflow-auto">
        <div class="w-full flex lg:justify-center overflow-x-auto">
            <app-select-menubar [options]="stateOptions" [(selectedOption)]="selected"/>
        </div>
        <div class="flex-1 pr-1 flex flex-col gap-1 overflow-auto">
            <p-message size="small" msg-info severity="info" class="m-1">
                <div class="text-color font-normale max-md:text-sm">
                    Ouvrez une discussion pour en savroir plus sur la personne qui vous l'envoie. Elle ne saura pas que vous l'avez vue tant que vous n'aurez pas répondu
                </div>
            </p-message>
            @if(this.selected() === 'request') {
                <app-item-convers (onSelect)="selectComponent()" [idSelected]="'bf'" />
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
                <app-item-convers/>
            } @else {
                <app-item-convers/>
            }
        </div>
    </div>
    `
})
export class MsgRequestListComponent implements OnInit {
    private router = inject(Router)
    private bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint
    private msgRqService = inject(MsgRequestService)

    stateOptions: ISelectMenuBarOptions[] = [
        { label: 'Request', value: 'request', badge: 2},
        { label: 'Spam', value: 'spam' }
    ];
    selected = signal('request');

    ngOnInit(): void {
        if(!this.bpService.isMobile())
            this.router.navigateByUrl('/menu/msg-request/bf')
    }

    selectComponent() {
        if(!this.bpService.isMobile() && this.bpService.screenWidth() <= this.bp.lg)
            this.msgRqService.swicthToComponent('outlet')
    }

}