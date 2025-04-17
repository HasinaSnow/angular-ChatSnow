import { Component, inject, OnInit } from '@angular/core';
import { ConversListComponent } from "./convers-list/convers-list.component";
import { conversMsgComponent } from './convers-msg/convers-msg.component';
import { ConversInfoComponent } from "./convers-info/convers-info.component";
import { BreakpointService } from '../../../shared/services/breakpoint.service';
import { CommonModule } from '@angular/common';
import { ConversService } from '../../../features/convers/convers.service';

@Component({
    selector: 'app-convers',
    imports: [CommonModule, ConversListComponent, conversMsgComponent, ConversInfoComponent],
    template: `
        <div class="md:grid md:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
            <!-- convers list -->
            <div class="col-span-1 md:block border-r border-surface hidden ">
                @if(bpService.screenWidth() >= bp.md) {
                    <app-convers-list/>
                }
            </div>

            <!-- convers msg -->
            <div class="md:col-span-2 h-full w-full">
                @if(bpService.screenWidth() >= bp.md) {
                    @switch (selectedComponent()) {
                        @case ('info') { <app-convers-info/>}
                        @default { <app-convers-msg/>}
                    }
                } @else {
                    @switch (selectedComponent()) {
                        @case ('info') { <app-convers-info/>}
                        @case ('msg') { <app-convers-msg/>}
                        @default { <app-convers-list/>}
                    }
                }
            </div>

            <!-- convers info -->
            <div class="col-span-1 hidden border-l border-surface lg:block">
                @if(bpService.screenWidth() >= bp.lg) {
                    <app-convers-info/>
                }
            </div>
        </div>
    `
})
export class ConversComponent implements OnInit {
    readonly bpService = inject(BreakpointService)
    private conversService = inject(ConversService)
    readonly selectedComponent = this.conversService.selectedComponent
    bp = this.bpService.breakpooint

    ngOnInit() {
    }

    openSideMenu() {
    }
}