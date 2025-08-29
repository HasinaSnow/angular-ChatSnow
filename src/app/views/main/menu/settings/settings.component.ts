import { Component, computed, inject } from '@angular/core';
import { BreakpointService } from '../../../../shared/services/breakpoint.service';

@Component({
    selector: 'app-settings',
    template: `
        <div class="w-full md:grid md:grid-cols-3 h-full p-2 md:p-4 overflow-auto text-color lg:px-6">
        <!-- img -->
        <div class="md:col-span-1 flex items-center flex-col gap-3 w-full rounded-md p-2 py-3 md:py-6">
            <div class="relative">
                <img src="./images/pdp1.jpg" alt="" height="{{imgSize()}}" width="{{imgSize()}}" class="border border-surface rounded-full">
                <i class="pi pi-plus p-3 border border-surface rounded-full absolute bottom-0 right-0 bg-surface-0 dark:bg-surface-950"></i>
            </div>
            <div class="font-bold text-2xl text-center">Hasina Niaina Snow</div>
        </div>

        <!-- sections -->
        <div class="md:col-span-2 p-2 flex flex-col gap-3">
            <!-- accounts-->
            <div class="">
                <h4 class="text-md md:mb-4 text-muted-color mb-2 border-b border-surface flex items-center gap-2">
                    Accounts
                </h4>

                <!-- account items -->
                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <img src="./images/pdp1.jpg" alt="" width="45" height="45" class="border border-surface rounded-full">
                            <div class="flex flex-col">
                                <span class="font-semibold text-md line-clamp-1">Hasina niaina snow</span>
                                <span class="text-sm text-muted-color">connected</span>
                            </div>
                        </div>
                        <i class="pi pi-check p-2 text-primary"></i>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <img src="" alt="" width="45" height="45" class="border border-surface rounded-full">
                            <div class="flex flex-col">
                                <span class="font-semibold text-md line-clamp-1">Mark Anthony</span>
                                <span class="text-sm text-muted-color">Last connected at 2 days</span>
                            </div>
                        </div>
                        <i class="pi pi-lock p-2 text-muted-color"></i>
                    </div>
    
                    <div class="flex items-center gap-2 cursor-pointer">
                        <div class="flex items-center justify-center size-11 rounded-full">
                            <i class="pi pi-user-plus"></i>
                        </div>
                        <span class="font-semibold text-muted-color-emphasis text-md">Add an account</span>
                    </div>
                </div>
            </div>

            <!-- profile -->
            <div class="">
                <h4 class="text-md text-muted-color mb-2 border-b border-surface flex items-center gap-2">
                    Profile
                </h4>

                <!-- profile items -->
                <div class="flex flex-col gap-2">
                    <!-- inline status -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <div class="flex items-center justify-center size-11 rounded-full">
                                <i class="pi pi-globe"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-semibold text-md">Inline status</span>
                                <span class="text-sm text-muted-color">Disabled</span>
                            </div>
                        </div>
                    </div>
                    <!-- profile name -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <div class="flex items-center justify-center size-11 rounded-full">
                                <i class="pi pi-user-edit"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-semibold text-md">Profile name</span>
                                <span class="text-sm text-muted-color">Hasina Niaina Snow</span>
                            </div>
                        </div>
                    </div>
                    <!-- email -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <div class="flex items-center justify-center size-11 rounded-full">
                                <i class="pi pi-at"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-semibold text-md">Email</span>
                                <span class="text-sm text-muted-color">{{'rakotohasinaniainasnow@gmail.com'}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- password -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <div class="flex items-center justify-center size-11 rounded-full">
                                <i class="pi pi-lock"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-semibold text-md">Change password</span>
                            </div>
                        </div>
                    </div>
                    <!-- logout -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 cursor-pointer">
                            <div class="flex items-center justify-center size-11 rounded-full">
                                <i class="pi pi-sign-out"></i>
                            </div>
                            <div class="flex flex-col">
                                <span class="font-semibold text-md">Sign out</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>`
})
export class SettingsComponent {
    screen = inject(BreakpointService);
    bp = this.screen.breakpoint
    imgSize = computed(() => {
        const screenWidth = this.screen.screenWidth()
        if(screenWidth < this.bp.md) return 100
        if(screenWidth < this.bp.lg) return 150
        else return 180
    })

}