import { Component, inject, OnInit } from '@angular/core';
import { ConversListComponent } from "./convers-list/convers-list.component";
import { BreakpointService } from '../../../shared/services/breakpoint.service';
import { ConversService } from '../../../features/convers/convers.service';
import { HeaderTitleComponent } from "../../../shared/components/header-title.component";
import { Router, RouterOutlet } from '@angular/router';
import { Button } from "primeng/button";

@Component({
    selector: 'app-convers',
    imports: [RouterOutlet, ConversListComponent, HeaderTitleComponent, Button],
    template: `
            @if(bpService.isMobile()) {
                <div class="p-2 flex flex-col gap-3 w-full h-full overflow-auto">
                    <div class="flex items-center justify-between pl-2 pt-2">
                        <app-header-title [title]="'Chat'" [icon]="'pi pi-comments'"/>
                        <p-button variant="text" severity="secondary" outlined="true" icon="pi pi-plus" (onClick)="addConvers()"></p-button>
                    </div>
                    <app-convers-list class="flex-1 overflow-auto"/>
                </div>
            } @else {
                <div class="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
                    <div class="p-2 col-span-1 border-r flex flex-col gap-3 border-surface overflow-auto">
                        <div class="flex items-center justify-between pl-2 pt-2">
                            <app-header-title [title]="'Chat'" [icon]="'pi pi-comments'"/>
                            <p-button variant="text" severity="secondary" outlined="true" icon="pi pi-plus" (onClick)="addConvers()"></p-button>
                        </div>
                        <app-convers-list class="flex-1 overflow-auto"/>
                    </div>
                    <div class="md:col-span-2 lg:col-span-3 overflow-auto">
                        <router-outlet/>
                    </div>
                </div>
            }
    `
})
export class ConversComponent implements OnInit {

    private router = inject(Router)
    readonly bpService = inject(BreakpointService)
    private conversService = inject(ConversService)
    readonly selectedComponent = this.conversService.selectedComponent
    bp = this.bpService.breakpoint

    ngOnInit(): void {
        if(!this.bpService.isMobile())
            this.router.navigateByUrl('/convers/bf')
    }

    addConvers() {
        console.log('add new convers')
    }
}