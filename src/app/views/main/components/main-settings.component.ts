import { Component, inject, OnInit, signal } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ThemeService } from '../../../shared/services/theme.service';
import { FormsModule } from '@angular/forms';
import { IInfoItem, ListMsgInfoComponent } from "../../../shared/components/list-msg-info.component";
import { HeaderTitleComponent } from "../../../shared/components/header-title.component";

@Component({
    selector: 'app-main-settings',
    imports: [FormsModule, ToggleSwitchModule, ListMsgInfoComponent, HeaderTitleComponent],
    template: `
    <div class="bg-surface-0 dark:bg-surface-950 text-color p-4 flex flex-col gap-2 border border-surface z-50 shadow-lg rounded-xl">
        <app-header-title [title]="'Settings'" [icon]="'pi pi-cog'"/>
        <app-list-msg-info [items]="mainSettingsItems"/>
    </div>`
})
export class MainSettingsComponent {
    themeService = inject(ThemeService)
    mainSettingsItems: IInfoItem[] = [
        {
            label: '',
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
            ]
        }
    ]
}