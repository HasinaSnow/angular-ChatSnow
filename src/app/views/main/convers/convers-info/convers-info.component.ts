import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConversInfoHeaderComponent } from "./components/convers-info-header.component";
import { ConversInfoSettingItemComponent } from './components/convers-info-setting-item.component';
import { ConversInfoMemberItemComponent } from "./components/convers-info-member-item.component";

@Component({
    selector: 'app-convers-info',
    imports: [
    ButtonModule,
    PanelModule,
    ConversInfoHeaderComponent,
    ConversInfoSettingItemComponent,
    ConversInfoMemberItemComponent
],
    template: `
        <div class="relative h-full w-full flex flex-col gap-2 px-3 py-5 overflow-auto">
            <!-- cancel button -->
            <div class="absolute top-2 left-2 md:hidden">
                <p-button icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>

            <!-- header -->
            <app-convers-info-header/>

            <!-- settings -->
            <p-panel toggleable="true" collapsed="false" >
                <ng-template #header>
                    <div class="flex gap-2 items-center text-color font-semibold text-lg">
                        <i class="pi pi-cog"></i>
                        <h3 class="">Settings</h3>
                    </div>
                </ng-template>
                <!-- setting items -->
                <div class="flex flex-col gap-4 mt-4">
                    <app-convers-info-setting-item/>
                    <app-convers-info-setting-item/>
                    <app-convers-info-setting-item/>
                </div>
            </p-panel>

            <!-- participants -->
            <p-panel toggleable="true" collapsed="true">
                <ng-template #header>
                    <div class="flex gap-2 items-center text-color font-semibold text-lg">
                        <i class="pi pi-users"></i>
                        <h3 class="">Participants</h3>
                    </div>
                </ng-template>
                <!-- participant items -->
                <div class="flex flex-col gap-4 mt-4 pb-5">
                    <app-convers-info-member-item/>
                    <app-convers-info-member-item/>
                    <app-convers-info-member-item/>
                    <app-convers-info-member-item/>
                </div>
            </p-panel>

            <!-- medias -->
            <!-- <div class="mt-5">
            </div> -->
        </div>
    `
})
export class ConversInfoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}