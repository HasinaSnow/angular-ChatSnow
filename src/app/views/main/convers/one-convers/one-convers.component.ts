import { Component, inject, OnInit } from "@angular/core";
import { ConversService } from "../convers.service";
import { BreakpointService } from "../../../../shared/services/breakpoint.service";
import { ConversMsgComponent } from "./convers-msg/convers-msg.component";
import { RouterOutlet } from "@angular/router";
import { OneConversStore } from "../../../../core/stores/convers/one-convers.store";
import { Button } from "primeng/button";

@Component({
    selector: 'app-one-convers',
    imports: [ConversMsgComponent, RouterOutlet, Button],
    template: `
        @if(bpService.screenWidth() < bp.lg) {
            @switch(selectedComponent()) {
                @case ('msg') {<app-convers-msg/>}
                @case ('info') {<router-outlet/>}
            }
        } @else {
            @if(store.oneConvers() === null) {
                <div class="w-full h-full flex items-center justify-center">
                    <p class="w-[70%] flex flex-col gap-2 text-lg text-color items-center text-center">
                        <i class="pi pi-comments text-primary" style="font-size: 2rem;"></i>
                        Create new conversation and chat with them : 
                        <p-button label="New chat" icon="pi pi-plus" outlined="true" styleClass="m-0"></p-button>
                    </p>
                </div>
            } @else {
                <div class="w-full h-full grid grid-cols-5 overflow-auto">
                    <div class="col-span-3 overflow-auto">
                        <app-convers-msg/>
                    </div>
                    <div class="col-span-2 overflow-auto">
                        <router-outlet/>
                    </div>
                </div>
            }
        }
    `
})
export class OneConversComponent implements OnInit {
    readonly bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint
    private conversService = inject(ConversService)
    readonly selectedComponent = this.conversService.selectedComponent
    store = inject(OneConversStore)

    ngOnInit(): void {
        this.conversService.cancelToDefault()
    }

}