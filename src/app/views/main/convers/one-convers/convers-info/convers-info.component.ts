import { Component, inject, OnInit, signal, Type } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { IInfoItem, ListMsgInfoComponent } from "../../../../../shared/components/list-msg-info.component";
import { ConversInfoHeaderComponent } from "./components/convers-info-header.component";
import { ConversService } from '../../../../../features/convers/convers.service';
import { Router } from '@angular/router';
import { BreakpointService } from '../../../../../shared/services/breakpoint.service';
import { DynamicDialogRef, DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog'
import { BlockComponent } from '../../../../../shared/components/block.component';

@Component({
    selector: 'app-convers-info',
    imports: [
        ButtonModule,
        PanelModule,
        ListMsgInfoComponent,
        ConversInfoHeaderComponent,
    ],
    template: `
        <div class="relative h-full w-full flex flex-col px-3 py-5 overflow-auto border-l border-surface">
            <!-- cancel button -->
            <div class="absolute top-3 left-2 lg:hidden">
                <p-button (onClick)="cancelToConversMsg()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>

            <!-- header -->
            <app-convers-info-header/>

            <!-- content -->
            <app-list-msg-info [items]="menuSettingsItems"/>
        </div>
    `
})
export class ConversInfoComponent implements OnInit {
    readonly conversService = inject(ConversService)
    private bpService = inject(BreakpointService)
    private router = inject(Router)

    private confirmService = inject(ConfirmationService)
    private dialogService = inject(DialogService)
    ref: DynamicDialogRef|undefined

    items!: MenuItem[];
    menuSettingsItems: IInfoItem[] = [
        {
            label: 'Discussion Informations',
            items: [
                {
                    label: 'All participants',
                    command: () => {
                        this.bpService.isMobile()
                            ? this.router.navigateByUrl(this.mobileCurrentUrl() + '/participants')
                            : this.router.navigateByUrl(this.router.url + '/participants')
                    },
                    icon: 'pi pi-users'
                },
                {
                    label: 'Media, Files and Links',
                    icon: 'pi pi-images',
                    command: () => {
                        this.bpService.isMobile()
                            ? this.router.navigateByUrl(this.mobileCurrentUrl() + '/medias')
                            : this.router.navigateByUrl(this.router.url + '/medias')
                    }
                },
                {
                    label: 'Pin messages',
                    icon: 'pi pi-thumbtack'
                }
            ],
        },
        {
            label: 'Others actions',
            items: [
                {
                    label: 'Sound and Notification',
                    icon: 'pi pi-bell',
                    inputCheck: {
                        check: signal(false),
                    }
                },
                {
                    label: 'Search in conversation',
                    icon: 'pi pi-search'
                },
            ],
        },
        {
            label: 'Privacy and Support',
            items: [
                {
                    label: 'Report this conversation',
                    description: 'Laissez un commentaire ou signalez la conversation',
                    icon: 'pi pi-flag-fill',
                },
                {
                    label: 'Block',
                    icon: 'pi pi-minus-circle',
                    command: () => { this.showDialog(BlockComponent, {
                        header: 'Block Hasina Niaina Snow?',
                        inputValues: {
                            name: 'Hasina Niaina',
                            cancelBtnVisible: this.bpService.isMobile(),
                            onConfirm: (value: boolean) => {
                                value
                                    ? console.info('block confirmed')
                                    : console.warn('block non confirmed')
                                this.ref?.close()
                            }
                        },
                        modal: true,
                        closable: !this.bpService.isMobile(),
                        position: this.bpService.isMobile() ? 'bottom' : undefined,
                        breakpoints: {
                            '1024px': '60vw',
                            '640px': '95vw',
                        }
                    })}
                },
                {
                    label: 'Delete conversation',
                    icon: 'pi pi-trash',
                    severity: 'danger',
                    command: ($event) => {
                        this.confirmService.confirm({
                            target: $event.target as EventTarget,
                            message: 'Tout sera supprimé, et vous ne pourrez plus accéder à cette discussion.',
                            header: 'Delete conversation ?',
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
                                label: 'Delete conversation',
                                severity: 'danger',
                            },
                            acceptIcon: 'pi pi-trash',
                            accept: () => console.log('conversation deleted'),
                            reject: () => console.log('deletion rejected')
                        })
                    }
                }
            ],
        }
    ]

    ngOnInit() {}

    showDialog(component: Type<any>, config: DynamicDialogConfig, ) {
        this.ref = this.dialogService.open(component, config)
    }

    mobileCurrentUrl() {
        const paths = this.router.url.split('/')
        const mobilePaths = paths.filter(path => path !== paths[paths.length - 1])
        return mobilePaths.join('/')
    }

    cancelToConversMsg() {
        this.conversService.selectedComponent.set('msg')
    }

}