import { Location } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Button } from "primeng/button";
import { IInfoItem, ListMsgInfoComponent } from "../../../../../shared/components/list-msg-info.component";
import { Avatar } from "primeng/avatar";
import { Router } from "@angular/router";
import { BreakpointService } from "../../../../../shared/services/breakpoint.service";
import { InvitationService } from "../invitation.service";

@Component({
    selector: 'app-one-invitation',
    imports: [Button, ListMsgInfoComponent, Avatar],
    template: `
    <div class="relative h-full w-full flex flex-col px-3 py-5 overflow-auto">
            <div class="absolute lg:hidden top-3 left-2">
                <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>
            <div class="absolute top-3 right-2">
                <p-button (onClick)="cancel()" icon="pi pi-ellipsis-v text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>
            <div class="flex flex-col items-center justify-center py-3">
                <p-avatar image="./images/pdp1.jpg" styleClass="w-32 w-32" size="xlarge" shape="circle"/>
                <div class="leading-6 font-medium text-color text-2xl mt-3 w-full text-center">PrimeTek</div>
                <div class="leading-5 text-muted-color text-md mt-1 w-full text-center">{{'@primetek'}}</div>

                <div class="flex items-center justify-center flex-wrap gap-4 mt-3">
                    <p-button disabled="true" icon="pi pi-phone text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
                    <p-button icon="pi pi-comment text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
                    <p-button icon="pi pi-user-plus text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
                </div>
            </div>
            <div class="my-2">
                <app-list-msg-info [items]="items"/>
            </div>
        </div>
    `
})
export class OneInvitationComponent {
    private location = inject(Location)
    private router = inject(Router)
    private invitationService = inject(InvitationService)
    private bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint

    items: IInfoItem[] = [
        {
            label: 'Friends in common',
            items: [
                {
                    label: 'Mutual friends',
                    icon: 'pi pi-users',
                    command: () => { this.router.navigateByUrl('menu/invitations/bf/mutual-friends') }
                },
            ]
        },
        {
            label: 'Privacy and Support',
            items: [
                {
                    label: 'Stop the communication',
                    severity: 'danger',
                    icon: 'pi pi-info-circle'
                }
            ]
        }
    ]

    cancel() { 
        if(this.bpService.isMobile())
            this.location.back()
        else if(this.bpService.screenWidth() <= this.bp.lg)
            this.invitationService.swicthToComponent('list')
    }
}