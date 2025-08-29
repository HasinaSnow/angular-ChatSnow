import { Component, inject, OnInit } from "@angular/core";
import { BreakpointService } from "../../../../shared/services/breakpoint.service";
import { Location } from "@angular/common";
import { Button } from "primeng/button";
import { InvitationListComponent } from "./components/invitation-list.component";
import { RouterOutlet } from "@angular/router";
import { InvitationService } from "./invitation.service";
import { HeaderTitleComponent } from "../../../../shared/components/header-title.component";

@Component({
    selector: 'app-invitations',
    imports: [InvitationListComponent, RouterOutlet, HeaderTitleComponent],
    template: `
        @if(bpService.isMobile()) {
            <div class="p-2 lg:p-3 text-color w-full h-full flex flex-col gap-2 overflow-auto">
                <app-header-title [withCancelBtn]="true" class="pt-1 pl-2" [title]="'Invitations'"/>
                <div class="flex-1 overflow-auto">
                    <app-invitation-list/>
                </div>
            </div>
        } @else if(bpService.screenWidth() < bp.lg) {
            @switch(selectedComponent()) {
                @case ('list') {
                    <div class="p-2 w-full h-full flex gap-3 flex-col overflow-auto">
                        <app-header-title class="pt-2 pl-2" [title]="'Invitations'" [icon]="'pi pi-users'"/>
                        <div class="flex-1 px-1 overflow-auto">
                            <app-invitation-list/>
                        </div>
                    </div>
                }
                @case ('outlet') {
                    <router-outlet/>
                }
            }
        }  @else {
            <div class="px-1 py-2 grid w-full h-full grid-cols-4 overflow-auto gap-3">
                <div class="col-span-2 flex gap-3 flex-col overflow-auto">
                    <app-header-title class="pt-2 pl-2" [title]="'Invitations'" [icon]="'pi pi-users'"/>
                    <div class="flex-1 px-1 overflow-auto">
                        <app-invitation-list/>
                    </div>
                </div>
                <div class="col-span-2 border-l border-surface overflow-auto">
                    <router-outlet/>
                </div>
            </div>
        }
    `
})
export class InvitationsComponent implements OnInit {
    private location = inject(Location)
    readonly bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint

    private invitationService = inject(InvitationService)
    readonly selectedComponent = this.invitationService.selectedComponent

    ngOnInit(): void {
        this.invitationService.cancelToDefault()
    }

    cancel() {
        this.location.back()
    }
}