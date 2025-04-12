import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

@Component({
    selector: 'app-convers-info-setting-item',
    imports: [FormsModule ,ToggleSwitchModule],
    template: `
    <div class="flex items-center gap-2">
        <i class="pi pi-bell text-color"></i>
        <div class="leading-6 font-medium text-color flex-1">Notifications</div>
        <p-toggleswitch styleClass="m-auto" [(ngModel)]="checkedNotifs" class="leading-0"/>
    </div>`
})
export class ConversInfoSettingItemComponent implements OnInit {
    checkedNotifs: boolean = false

    constructor() { }

    ngOnInit() { }
}