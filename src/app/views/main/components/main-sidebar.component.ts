import { Component, inject, OnInit, viewChild} from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip'
import { FormsModule } from '@angular/forms';
import { PopupService } from '../../../shared/services/popup.service';
import { PopupComponent } from "../../../shared/components/ui/popup.component";
import { MainSettingsComponent } from "./main-settings.component";
import { BreakpointService } from '../../../shared/services/breakpoint.service';
import { AuthService } from '../../../shared/auth/auth.service';
import { LogoutConfirm } from '../../../shared/helpers/logout-confirmation';

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
    <div class="flex justify-between sm:justify-start sm:flex-col w-full h-full max-sm:px-6 p-2">
        <!-- header -->
        <div class="hidden sm:block p-2 items-center justify-center gap-3">
            <!-- logo -->
            <img src="./favicon.ico" alt="logo" height="35" width="35">
        </div>

        <!-- content -->
        <div class="flex-1 justify-between sm:justify-start py-2 sm:py-4 h-full overflow-auto flex items-center sm:flex-col sm:gap-3">
            @for (item of items; track $index) {
                <div
                (click)="selectUrl($event, item.routerLink)"
                [routerLink]="[ item.routerLink ]"
                routerLinkActive="text-primary bg-highlight-emphasis"
                pTooltip="{{item.label}}"
                tooltipStyleClass="ml-1 font-semibold"
                class="{{item.disabled ? 'hidden' : ''}} text-color max-sm:flex-1 flex items-center max-sm:flex max-sm:justify-center p-3 hover:text-primary transition-all rounded-md gap-2 cursor-pointer">
                    <i class="{{item.icon}}" style="font-size: 1rem"></i>
                    <span class="sm:hidden text-xs font-light">{{item.label}}</span>
                </div>
            }
        </div>

        <!-- footer -->
        <div class="hidden py-3 relative sm:flex items-center sm:flex-col sm:gap-3">
            <div tooltipStyleClass="ml-1 font-semibold" pTooltip="Settings" (click)="togglePopupSettings($event)" class="relative z-50 flex items-center hover:bg-highlight-emphasis p-3 hover:text-primary text-color transition-all rounded font-bold gap-2 cursor-pointer">
                <i class="pi pi-cog text-inherit" style="font-size: 1rem"></i>
            </div>
            <div (click)="logout($event)" pTooltip="Sign out" tooltipStyleClass="ml-1 font-semibold" class="hidden sm:flex items-center p-3 hover:text-red-500 text-color transition-all rounded font-bold gap-2 cursor-pointer">
                <i class="pi pi-sign-out text-inherit" style="font-size: 1rem"></i>
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

    private confirmService = inject(ConfirmationService)
    private authService = inject(AuthService)
    private popupService = inject(PopupService)
    private bpService = inject(BreakpointService)
    private router = inject(Router)

    items: MenuItem[] = [
        { label: 'Menu', icon: 'pi pi-bars', routerLink: 'menu'},
        { label: 'Chat', icon: 'pi pi-comment', routerLink: 'convers'},
    ];

    ngOnInit() {
    }

    selectUrl($event: MouseEvent, currentUrl: string) {
        const url = this.router.url
        if(url.includes(currentUrl)) {
            $event.preventDefault()
            this.router.navigateByUrl(url)
        }
    }

    isSmScreen() {
        return this.bpService.screenWidth() <= this.bpService.breakpoint.sm
    }

    togglePopupSettings($event: MouseEvent) {
        const position = (this.bpService.screenWidth() > this.bpService.breakpoint.sm) ? 'auto' : 'top-left'
        this.popupService.togglePopup(this.popupSettings, $event, position)
    }

    togglePoPupHome($event: MouseEvent) {
        this.popupService.togglePopup(this.popupHome, $event)
    }

    logout($event: MouseEvent) {
        this.confirmService.confirm({
            ...LogoutConfirm($event, this.bpService),
            accept: () => this.authService.signOut(),
        })
    }


}