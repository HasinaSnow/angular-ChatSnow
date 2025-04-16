import { Component, inject, OnInit } from '@angular/core';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ThemeService } from '../../../shared/services/theme.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-main-settings',
    imports: [FormsModule , ToggleSwitchModule],
    template: `
    <div class="bg-surface-0 dark:bg-surface-950 text-color p-3 border border-surface z-50 shadow-lg rounded-xl">
        <div class="font-semibold flex items-center gap-2 text-color text-2xl pb-2 border-b border-surface">
            <i class="pi pi-cog text-3xl"></i>
            Settings
        </div>
        <div class="flex flex-col my-2">
            <div class="flex justify-between items-center p-2 gap-6">
                <span class="text-color text-lg">Dark theme</span>
                <p-toggleswitch styleClass="m-auto" [(ngModel)]='themeService.isDark' class="leading-0"/>
            </div>
            <div class="flex justify-between items-center p-2 gap-6">
                <span class="text-color text-lg">Inline status</span>
                <p-toggleswitch styleClass="m-auto" class="leading-0"/>
            </div>
        </div>
    </div>`
})
export class MainSettingsComponent implements OnInit {
    themeService = inject(ThemeService)
    constructor() { }

    ngOnInit() { }
}