import { Component, inject } from '@angular/core';
import { BreakpointService } from '../../../../shared/services/breakpoint.service';
import { ConversService } from '../convers.service';
import { RouterOutlet } from "@angular/router";
import { ConversStore } from '../../../../core/stores/convers/convers.store';
import { ConversMsgNewComponent } from './components/convers-msg-new.component';

@Component({
    selector: 'app-convers-new',
    template: `
    @if(bpService.screenWidth() < bp.lg) {
            @switch(selectedComponent()) {
                @case ('msg') {<app-convers-msg-new/>}
                @case ('info') {<router-outlet/>}
            }
        } @else {
                <div class="w-full h-full grid grid-cols-5 overflow-auto">
                    <div class="col-span-3 overflow-auto">
                        <app-convers-msg-new/>
                    </div>
                    <div class="col-span-2 overflow-auto">
                        <router-outlet/>
                    </div>
                </div>
        }
    `,
    imports: [ConversMsgNewComponent, RouterOutlet]
})
export class ConversNewComponent {
    readonly bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint
    private conversService = inject(ConversService)
    readonly selectedComponent = this.conversService.selectedComponent
    store = inject(ConversStore)
}