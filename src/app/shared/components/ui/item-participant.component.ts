import { Component, inject, input, OnInit, viewChild } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { Button } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { BreakpointService } from '../../services/breakpoint.service';
import { IInfoItem, ListMenuItemComponent } from './list-menu-item.component';

@Component({
    selector: 'app-item-participant',
    imports: [Badge, Avatar, Button, Popover, ListMenuItemComponent],
    template: `
    <div class="md:px-3 py-2 flex gap-3 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
        <div class="relative flex items-center flex-col justify-center">
            <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
            <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="large" shape="circle"/>
        </div>
        <div class="text-color-emphasis flex-1">
            <div class="flex gap-1 items-center justify-between">
                <div class="flex-1 text-color text-lg font-medium line-clamp-1 leading-6">hasina niaina snow</div>
                @if(isAdmin()) {<p-badge size="small" value="admin" severity="warn"/>}
            </div>
            @if(mutualFriends() > 0) {
                <p class="text-sm line-clamp-1 leading-6 text-muted-color">{{mutualFriends()}} ami(e)s en commun</p>
            }
        </div>
        <p-button (onClick)="toggle($event)" icon="pi pi-ellipsis-v text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />

        <!-- popover -->
        <p-popover #op>
            <app-list-menu-item [items]="optionItems"/>
        </p-popover>
    </div>`
})
export class ItemParticipantComponent implements OnInit {
    op = viewChild<Popover>('op')
    mutualFriends = input.required<number>()
    isAdmin = input<boolean>()
    id: string = 'bf'

    private confirmService = inject(ConfirmationService)
    private bpService = inject(BreakpointService)
    private router = inject(Router)
    optionItems!: IInfoItem[]

    ngOnInit() {
        this.optionItems = [
            {
                label: 'Options',
                items: [
                    {
                        label: 'Remove admin',
                        icon: 'pi pi-times',
                        severity: 'danger',
                        hide: !this.isAdmin(),
                        command: ($event) => { 
                            this.confirmService.confirm({
                                header: 'Remove admin?',
                                message: "Si vous êtes permis, vous pouvez retirer de la liste des admins le participant.",
                                target: $event.target as EventTarget,
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
                                    label: 'Remove admin',
                                    severity: 'danger',
                                },
                                acceptIcon: 'pi pi-start',
                                accept: () => console.log('removed admin confirmed'),
                                reject: () => console.log('removed amdin rejected')
                            })
                            this.op()?.hide()
                        }
                    },
                    {
                        label: 'Remove from conversation',
                        icon : 'pi pi-times',
                        severity: 'danger',
                        command: ($event) => {
                            this.confirmService.confirm({
                                header: 'Remove from group chat?',
                                message: "Si vous êtes permis, vous pouvez retirer l'utilisateur de la liste des participants de la conversation.",
                                target: $event.target as EventTarget,
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
                                    label: 'Remove from conversation',
                                    severity: 'danger',
                                },
                                acceptIcon: 'pi pi-start',
                                accept: () => console.log('removed from conversation confirmed'),
                                reject: () => console.log('removed from conversation rejected')
                            })
                            this.op()?.hide()
                        }
                    },
                    {
                        label: 'Send message',
                        icon: 'pi pi-comment',
                        command: () => { 
                            const url = 'convers/'
                            this.bpService.isMobile()
                                ? this.router.navigate(['mobile/' + url, this.id])
                                : this.router.navigate([url, this.id]) 
                            this.op()?.hide()
                        }
                    }
                ]
            }
        ]
     }

    toggle($event: MouseEvent) {
        this.op()?.toggle($event)
    }
}