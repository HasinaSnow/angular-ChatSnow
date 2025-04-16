import { Component, inject, OnInit, viewChild} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip'
import { FormsModule } from '@angular/forms';
import { PopupService } from '../../../shared/services/popup.service';
import { PopupComponent } from "../../../shared/components/popup.component";
import { MainSettingsComponent } from "./main-settings.component";

@Component({
    selector: 'app-main-sidebar',
    imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    TooltipModule,
    PopupComponent,
    MainSettingsComponent
],
    template: `
    <div class="flex flex-col w-full h-full p-2">
        <!-- header -->
        <div class="p-2 items-center justify-center gap-3 flex">
            <!-- logo -->
            <img src="./favicon.ico" alt="logo" height="35" width="35">
            <!-- <h2 class="text-color font-bold text-2xl">Logo app</h2> -->
        </div>

        <!-- content -->
        <div class="flex-1 py-4 h-full overflow-auto flex items-center flex-col gap-3">
            <div class="flex items-center bg-surface-0 dark:bg-surface-950 border p-3 hover:text-primary text-primary border-primary hover:border-primary transition-all rounded-md font-bold gap-2 cursor-pointer">
                <i class="pi pi-home text-inherit"></i>
            </div>
            @for (item of items; track $index) {
                <div
                [routerLink]="[ item.routerLink ]"
                routerLinkActive="bg-primary text-white"
                pTooltip="{{item.label}}"
                tooltipStyleClass="ml-1 font-semibold"
                class="hover:bg-surface-0 flex items-center p-3 hover:text-primary dark:hover:bg-surface-950 hover:border hover:border-primary transition-all rounded-md font-bold text-color gap-2 cursor-pointer">
                    <i class="{{item.icon}} text-inherit"></i>
                </div>
            }
        </div>

        <!-- footer -->
        <div class="py-3 relative flex items-center flex-col gap-3">
            <div tooltipStyleClass="ml-1 font-semibold" pTooltip="Settings" (click)="togglePoPupSettings($event)"  class="relative z-50 flex items-center hover:bg-surface-0 p-3 hover:border hover:text-primary text-color hover:border-primary transition-all rounded-md font-bold gap-2 cursor-pointer">
                <i class="pi pi-cog text-inherit"></i>
            </div>
            <div pTooltip="Sign out" tooltipStyleClass="ml-1 font-semibold" class="flex items-center hover:bg-surface-0 p-3 hover:border hover:text-primary hover:border-primary text-color transition-all rounded-md font-bold gap-2 cursor-pointer">
                <i class="pi pi-sign-out text-inherit"></i>
            </div>
        </div>

        <!-- popups -->
        <app-popup #popupSettings>
            <app-main-settings popupContent></app-main-settings>
        </app-popup>

    </div>`
})
export class MainSidebarComponent implements OnInit {
    popupSettings = viewChild<PopupComponent|undefined>('popupSettings')
    popupHome = viewChild<PopupComponent|undefined>('popupHome')
    popupService = inject(PopupService)

    items: MenuItem[] = [
        { label: 'Chat', icon: 'pi pi-comment', routerLink: '/chat' },
        { label: 'Profile', icon: 'pi pi-user', routerLink: '/profile' },
    ];

    ngOnInit() {
    }

    togglePoPupSettings($event: MouseEvent) {
        this.popupService.togglePopup(this.popupSettings, $event)
    }

    togglePoPupHome($event: MouseEvent) {
        this.popupService.togglePopup(this.popupHome, $event)
    }


}