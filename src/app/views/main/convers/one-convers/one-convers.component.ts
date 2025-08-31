import { Component, inject, OnInit } from "@angular/core";
import { ConversService } from "../../../../features/convers/convers.service";
import { BreakpointService } from "../../../../shared/services/breakpoint.service";
import { ConversMsgComponent } from "./convers-msg/convers-msg.component";
import { ConversInfoComponent } from "./convers-info/convers-info.component";

@Component({
    selector: 'app-one-convers',
    imports: [ConversMsgComponent, ConversInfoComponent],
    template: `
        @if(bpService.screenWidth() < bp.lg) {
            @switch(selectedComponent()) {
                @case ('msg') {<app-convers-msg/>}
                @case ('info') {<app-convers-info/>}
            }
        } @else {
            <div class="w-full h-full grid grid-cols-5 overflow-auto">
                <div class="col-span-3 overflow-auto">
                    <app-convers-msg/>
                </div>
                <div class="col-span-2 overflow-auto">
                    <app-convers-info/>
                </div>
            </div>
        }
    `
})
export class OneConversComponent implements OnInit {
    readonly bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint
    private conversService = inject(ConversService)
    readonly selectedComponent = this.conversService.selectedComponent

    ngOnInit(): void {
        this.conversService.cancelToDefault()
    }

}