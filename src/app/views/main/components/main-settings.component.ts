import { Component, inject, OnInit, signal } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ThemeService } from '../../../shared/services/theme.service';
import { FormsModule } from '@angular/forms';
import { IInfoItem, ListMsgInfoComponent } from "../../../shared/components/list-msg-info.component";

@Component({
    selector: 'app-main-settings',
    imports: [FormsModule, ToggleSwitchModule, ListMsgInfoComponent],
    template: `
    <div class="bg-surface-0 dark:bg-surface-950 text-color p-4 border border-surface z-50 shadow-lg rounded-xl">
        <div class="font-semibold flex items-center gap-2 text-color text-2xl pb-2">
            <i class="pi pi-cog text-3xl"></i>
            <span class="leading-0">Settings</span>
        </div>
        <app-list-msg-info [items]="mainSettingsItems"/>
    </div>`
})
export class MainSettingsComponent {
    themeService = inject(ThemeService)
    mainSettingsItems: IInfoItem[] = [
        {
            label: 'Preferences',
            items: [
                {
                    label: 'Sound & Notification',
                    icon: 'pi pi-info-circle',
                    inputCheck: {
                        check: signal(true),
                    }
                },
                {
                    label: 'Dark theme',
                    icon: 'pi pi-moon',
                    inputCheck: {
                        check: this.themeService.isDark,
                    }
                }
            ],
        },
    ]
}