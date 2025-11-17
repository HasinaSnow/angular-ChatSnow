import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { BreakpointService } from '../../../../shared/services/breakpoint.service';
import { Button } from "primeng/button";
import { Location } from '@angular/common';
import { IInfoItem, ListMenuItemComponent } from '../../../../shared/components/ui/list-menu-item.component';
import { ThemeService } from '../../../../shared/services/theme.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProfileNameEditComponent } from './components/profile-name-edit.component';
import { ChangePasswordComponent } from './components/change-pwd.component';
import { ConfirmationService } from 'primeng/api';
import { LogoutConfirm } from '../../../../shared/helpers/logout-confirmation';
import { AuthService } from '../../../../shared/auth/auth.service';

@Component({
    selector: 'app-profile',
    template: `
    <div class="relative w-full lg:grid lg:grid-cols-3 lg:gap-4 h-full p-2 md:p-4 overflow-auto text-color lg:px-6">
        <p-button class="absolute top-3 left-2 md:hidden" (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />

        <!-- img -->
        <div class="md:col-span-1 flex items-center flex-col gap-3 w-full rounded-md p-2 py-3 md:py-6">
            <div class="relative">
                <img src="./images/pdp1.png" alt="" height="{{imgSize()}}" width="{{imgSize()}}" class="border border-surface rounded-full">
                <i class="pi pi-plus p-3 border border-surface rounded-full absolute bottom-0 right-0 bg-surface-0 dark:bg-surface-950"></i>
            </div>
            <div class="font-bold text-2xl text-center">Hasina Niaina Snow</div>
        </div>

        <!-- sections -->
        <app-list-menu-item class="md:col-span-2 p-2 flex flex-col gap-3" [items]="profileInfo"/>

    </div>`,
    imports: [Button, ListMenuItemComponent]
})
export class ProfileComponent {
    themeService = inject(ThemeService)

    private authService = inject(AuthService)
    private bpService = inject(BreakpointService)
    private dialogService = inject(DialogService)
    private confirmService = inject(ConfirmationService)
    ref: DynamicDialogRef|undefined

    private location = inject(Location)
    screen = inject(BreakpointService)
    bp = this.screen.breakpoint
    imgSize = computed(() => {
        const screenWidth = this.screen.screenWidth()
        if(screenWidth < this.bp.md) return 100
        if(screenWidth < this.bp.lg) return 150
        else return 180
    })

    profileName: WritableSignal<string> = signal('Hasina Snow')
    showEmail: WritableSignal<boolean> = signal(false)
    emailDescription = computed(() => this.showEmail() ? 'rakotohasinasnow@gmail.com': 'Disabled : ****')
    enableInlineSatus = signal(true)
    inlineStatus = computed(() => this.enableInlineSatus() ? 'Enabled': 'Disabled')
    darkThemeStatus = computed(() => this.themeService.isDark() ? 'Enabled': 'Disabled')

    accounts = [
        {
            name: 'Hasina Niaina Snow',
            id: 'hasina_id',
            imgUrl: "./images/pdp1.jpg"
        },
        {
            name: 'Mark Anthony',
            id: 'mark_id',
            imgUrl: "./images/pdp1.jpg"
        }
    ]

    profileInfo: IInfoItem[] = [
        {
            label: 'Accounts',
            items: [
                ...this.accounts.map(account => ({
                    label: account.name,
                    img: account.imgUrl,
                    command: ($event) => {
                        this.confirmService.confirm({
                            target: $event.target as EventTarget,
                            message: `Voulez-vous changer de compte en tant que "${account.name}" ?`,
                            header: 'Change account ?',
                            closable: !this.bpService.isMobile(),
                            closeOnEscape: true,
                            icon: 'pi pi-exclamation-triangle',
                            rejectVisible: this.bpService.isMobile(),
                            rejectButtonProps: {
                                label: 'cancel',
                                severity: 'secondary',
                                outlined: true
                            },
                            acceptButtonProps: {
                                label: 'change account',
                                severity: 'primary'
                            },
                            acceptIcon: 'pi pi-check',
                            accept: () => console.log('vous avez changer de compte!'),
                            reject: () => console.log('changement de compte annulé!')
                        })
                    }
                }) as IInfoItem),
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
                    signalInputCheck: this.enableInlineSatus,
                    signalDescription: this.inlineStatus,
                },
                {
                    label: 'Dark theme',
                    icon: 'pi pi-moon',
                    signalInputCheck: this.themeService.isDark,
                    signalDescription: this.darkThemeStatus
                },
                {
                    label: 'Profile name',
                    icon: 'pi pi-user-edit',
                    signalDescription: this.profileName,
                    command: () => {
                        this.ref = this.dialogService.open(ProfileNameEditComponent, {
                            header: 'Edit your Profile name',
                            inputValues: {
                                name: this.profileName(),
                                cancelBtnVisible: this.bpService.isMobile(),
                                onSave: (isEdited: boolean, value?: string) => {
                                    if(isEdited && value) {
                                        console.info('new profile name saved')
                                        this.profileName.set(value)
                                    } else console.warn('edit cancel')
                                    this.ref?.close()
                                },
                            },
                            modal: true,
                            closable: !this.bpService.isMobile(),
                            position: 'center',
                            breakpoints: {
                                '1024px': '60vw',
                                '640px': '95vw',
                            }
                        })
                    }
                },
                {
                    label: 'Email',
                    icon: 'pi pi-at',
                    signalDescription: this.emailDescription,
                    signalInputCheck: this.showEmail
                },
                {
                    label: 'Password',
                    description: 'Change password',
                    severity: 'danger',
                    icon: 'pi pi-lock',
                    command: () => {
                        this.ref = this.dialogService.open(ChangePasswordComponent, {
                            header: 'Change Password',
                            inputValues: {
                                id: 'id_User',
                                cancelBtnVisible: this.bpService.isMobile(),
                                onSave: (value: boolean) => {
                                    value
                                        ? console.info('block confirmed')
                                        : console.warn('block non confirmed')
                                    this.ref?.close()
                                }
                            },
                            modal: true,
                            closable: !this.bpService.isMobile(),
                            position: 'center',
                            breakpoints: {
                                '1024px': '60vw',
                                '640px': '95vw',
                            }
                        })
                    }
                },
                {
                    label: 'Sign out',
                    severity: 'danger',
                    icon: 'pi pi-sign-out',
                    command: ($event) => {
                        this.confirmService.confirm({
                            ...LogoutConfirm($event, this.bpService),
                            accept: () => this.authService.signOut(),
                        })
                    }
                },
            ]
        }
    ]

    cancel() { this.location.back() }

}