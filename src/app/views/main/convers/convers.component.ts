import { Component, inject, OnInit } from '@angular/core';
import { ConversListComponent } from "./convers-list/convers-list.component";
import { BreakpointService } from '../../../shared/services/breakpoint.service';
import { ConversService } from './convers.service';
import { HeaderTitleComponent } from "../../../shared/components/ui/header-title.component";
import { Router, RouterOutlet } from '@angular/router';
import { Button } from "primeng/button";
import { ConversStore } from '../../../core/stores/convers/convers.store';
import { ConversSuggestionComponent } from './convers-list/components/convers-suggestion.component';

@Component({
    selector: 'app-convers',
    imports: [RouterOutlet, ConversListComponent, HeaderTitleComponent, Button, ConversSuggestionComponent],
    template: `
            @if(bpService.isMobile()) {
                @switch(conversView()) {
                    @case('list') {
                        <div class="p-2 flex flex-col gap-3 w-full h-full overflow-auto">
                            <div class="flex items-center justify-between pl-2 pt-2">
                                <app-header-title [title]="'Chat'" [icon]="'pi pi-comments'"/>
                                <p-button variant="text" severity="secondary" outlined="true" icon="pi pi-plus" (onClick)="addConvers()"></p-button>
                            </div>
                            @if(store.entities().length === 0) {
                                <div class="flex-1 flex items-center justify-center">
                                    <p class="px-2 flex flex-col gap-2 text-lg text-color items-center text-center">
                                        <i class="pi pi-comments text-primary" style="font-size: 2rem;"></i>
                                        Create new conversation and chat with them : 
                                        <p-button label="New chat" icon="pi pi-plus" outlined="true" styleClass="m-0"></p-button>
                                    </p>
                                </div>
                            } @else {
                                <app-convers-list class="flex-1 overflow-auto"/>
                            }
                        </div>
                    }
                    @case('new') {
                        <app-convers-suggestion/>
                    }
                }
            } @else {
                <div class="grid grid-rows-1 md:grid-cols-3 lg:grid-cols-4 w-full h-full">
                    @switch(conversView()) {
                        @case('list') {
                            <div class="p-2 col-span-1 border-r flex flex-col gap-3 border-surface overflow-auto">
                                <div class="flex items-center justify-between pl-2 pt-2">
                                    <app-header-title [title]="'Chat'" [icon]="'pi pi-comments'"/>
                                    <p-button variant="text" severity="secondary" outlined="true" icon="pi pi-plus" (onClick)="addConvers()"></p-button>
                                </div>
                                <app-convers-list class="flex-1 overflow-auto"/>
                            </div>
                        }
                        @case('new') {
                            <app-convers-suggestion/>
                        }
                        }
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
    store = inject(ConversStore)

    bp = this.bpService.breakpoint
    conversView = this.conversService.selectedConversView

    ngOnInit(): void {
        if(!this.bpService.isMobile())
            this.router.navigateByUrl('/convers/')
        this.conversService.switchToConversView('list')
    }

    addConvers() {
        console.log('add new convers')
        this.conversService.switchToConversView('new')
    }
}