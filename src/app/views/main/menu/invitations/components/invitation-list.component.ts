import { Component, inject, OnInit, signal } from "@angular/core";
import { Router } from "@angular/router";
import { BreakpointService } from "../../../../../shared/services/breakpoint.service";
import { FormsModule } from "@angular/forms";
import { InvitationItemComponent } from "./invitation-item.component";
import { ISelectMenuBarOptions, SelectMenubarComponent } from "../../../../../shared/components/select-menubar.component";
import { InputIcon } from "primeng/inputicon";
import { IconField } from "primeng/iconfield";
import { InputText } from "primeng/inputtext";
import { InvitationService } from "../invitation.service";

@Component({
    selector: 'app-invitation-list',
    imports: [
    FormsModule,
    InvitationItemComponent,
    SelectMenubarComponent,
    InputIcon,
    InputText,
    IconField
],
    template: `
    <div class="pl-1 w-full h-full flex flex-col gap-2 overflow-auto">
        <div class="w-full flex lg:justify-center overflow-x-auto">
            <app-select-menubar [options]="stateOptions" [(selectedOption)]="selected"/>
        </div>
        <div class="flex-1 flex flex-col overflow-auto">
            @if(this.selected() === 'invitations') {
                <app-invitation-item (onSelect)="selectComponent()" [isInvitation]="true" [idSelected]="'bf'" [mutualFriends]="5" />
                <app-invitation-item [isInvitation]="true" [mutualFriends]="3"/>
                <app-invitation-item [isInvitation]="true" [mutualFriends]="10"/>
                <app-invitation-item [isInvitation]="true" [mutualFriends]="4"/>
                <app-invitation-item [isInvitation]="true" [mutualFriends]="0"/>
            } @else if(this.selected() == 'suggestions') {
                <app-invitation-item [isInvitation]="false" [mutualFriends]="3"/>
                <app-invitation-item [isInvitation]="false" [mutualFriends]="24"/>
                <app-invitation-item [isInvitation]="false" [mutualFriends]="8"/>
            } @else {
                <div class="w-full h-full flex flex-col">
                    <div class="flex gap-2 flex-col p-2">
                        <p-iconfield styleClass="w-full">
                            <p-inputicon styleClass="pi pi-search" />
                            <input type="text" pInputText placeholder="Search" class="w-full" />
                        </p-iconfield>
                        <span class="text-muted-color">results of search people :</span>
                    </div>
                    <div class="flex-1 overflow-auto">
                        <app-invitation-item [isInvitation]="true" [idSelected]="'bf'" [mutualFriends]="5" />
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="3"/>
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="10"/>
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="4"/>
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="4"/>
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="4"/>
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="4"/>
                        <app-invitation-item [isInvitation]="true" [mutualFriends]="4"/>
                    </div>
                </div>
            }
        </div>
    </div>`
})
export class InvitationListComponent implements OnInit {
    private router = inject(Router)
    private invitationService = inject(InvitationService)
    private bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint

    stateOptions: ISelectMenuBarOptions[] = [
        { label: 'Invitations', value: 'invitations', badge: 2},
        { label: 'Suggestions', value: 'suggestions' },
        { icon: 'pi pi-search', value: 'search' }
    ];
    selected = signal('invitations');

    ngOnInit(): void {
        if(!this.bpService.isMobile())
            this.router.navigateByUrl('/menu/invitations/bf')
    }

    selectComponent() {
        if(!this.bpService.isMobile() && this.bpService.screenWidth() <= this.bp.lg)
            this.invitationService.swicthToComponent('outlet')
    }
}