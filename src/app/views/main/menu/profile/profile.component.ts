import { Component, computed, inject } from '@angular/core';
import { BreakpointService } from '../../../../shared/services/breakpoint.service';
import { Button } from "primeng/button";
import { Location } from '@angular/common';
import { IInfoItem, ListMsgInfoComponent } from '../../../../shared/components/list-msg-info.component';

@Component({
    selector: 'app-profile',
    template: `
    <div class="relative w-full lg:grid lg:grid-cols-3 lg:gap-4 h-full p-2 md:p-4 overflow-auto text-color lg:px-6">
        <p-button class="absolute top-3 left-2 md:hidden" (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />

        <!-- img -->
        <div class="md:col-span-1 flex items-center flex-col gap-3 w-full rounded-md p-2 py-3 md:py-6">
            <div class="relative">
                <img src="./images/pdp1.jpg" alt="" height="{{imgSize()}}" width="{{imgSize()}}" class="border border-surface rounded-full">
                <i class="pi pi-plus p-3 border border-surface rounded-full absolute bottom-0 right-0 bg-surface-0 dark:bg-surface-950"></i>
            </div>
            <div class="font-bold text-2xl text-center">Hasina Niaina Snow</div>
        </div>

        <!-- sections -->
        <app-list-msg-info class="md:col-span-2 p-2 flex flex-col gap-3" [items]="profileInfo"/>

    </div>`,
    imports: [Button, ListMsgInfoComponent]
})
export class ProfileComponent {
    private location = inject(Location)
    screen = inject(BreakpointService)
    bp = this.screen.breakpoint
    imgSize = computed(() => {
        const screenWidth = this.screen.screenWidth()
        if(screenWidth < this.bp.md) return 100
        if(screenWidth < this.bp.lg) return 150
        else return 180
    })

    profileInfo: IInfoItem[] = [
        {
            label: 'Accounts',
            items: [
                {
                    label: 'Hasina Niaina Snow',
                    img: './images/pdp1.jpg'
                },
                {
                    label: 'Mark Anthonny',
                    img: './images/pdp1.jpg'
                },
                {
                    label: 'Add an account',
                    icon: 'pi pi-user-plus'
                }
            ]
        },
        {
            label: 'Profile settings',
            items: [
                {
                    label: 'Inline status',
                    icon: 'pi pi-globe',
                    description: 'Disabled'
                },
                {
                    label: 'Dark theme',
                    icon: 'pi pi-moon',
                    description: 'Disable'
                },
                {
                    label: 'Profile name',
                    icon: 'pi pi-user-edit',
                    description: 'Hasina Niaina Snow'
                },
                {
                    label: 'Email',
                    icon: 'pi pi-at',
                    description: 'rakotohasinasnow@gmail.com'
                },
                {
                    label: 'Password',
                    description: 'Change password',
                    severity: 'danger',
                    icon: 'pi pi-lock',
                },
                {
                    label: 'Sign out',
                    severity: 'danger',
                    icon: 'pi pi-sign-out'
                },
            ]
        }
    ]

    cancel() { this.location.back() }


}