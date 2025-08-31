import { Component, ElementRef, inject, input, OnInit, Signal, viewChild } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { Badge } from 'primeng/badge';
import { Button } from 'primeng/button';
import { Popover } from 'primeng/popover';
import { IInfoItem, ListMsgInfoComponent } from './list-msg-info.component';
import { Router } from '@angular/router';
import { BreakpointService } from '../services/breakpoint.service';

@Component({
    selector: 'app-item-participant',
    imports: [Badge, Avatar, Button, Popover, ListMsgInfoComponent],
    template: `
    <div class="md:px-3 py-2 flex gap-3 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
        <div class="relative flex items-center flex-col justify-center">
            <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
            <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="large" shape="circle"/>
        </div>
        <div class="text-color-emphasis flex-1">
            <div class="flex gap-1 items-start justify-between">
                <div class="text-color text-lg font-medium leading-6">Name</div>
            </div>
            @if(mutualFriends() > 0) {
                <p class="text-sm line-clamp-1 leading-6 text-muted-color">
                    {{mutualFriends()}} ami(e)s en commun
                </p>
            }
        </div>
        <p-button (onClick)="toggle($event)" icon="pi pi-ellipsis-v text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />

        <!-- popover -->
        <p-popover #op>
            <app-list-msg-info [items]="optionItems"/>
        </p-popover>
    </div>`
})
export class ItemParticipantComponent implements OnInit {
    op = viewChild<Popover>('op')
    mutualFriends = input.required<number>()
    isAdmin = input.required<boolean>()
    id: string = 'bf'

    private bpService = inject(BreakpointService)
    private router = inject(Router)
    optionItems: IInfoItem[] = [
        {
            label: 'Options',
            items: [
                {
                    label: 'Remove admin',
                    icon: 'pi pi-times',
                    command: () => { console.log('Remove admin'); this.op()?.hide()}
                },
                {
                    label: 'Remove from group chat',
                    icon : 'pi pi-times',
                    command: () => { console.log('Remove from group chat'); this.op()?.hide()}
                },
                {
                    label: 'Send message',
                    icon: 'pi pi-comment',
                    command: () => { 
                        console.log('Send message')
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

    ngOnInit() { }

    toggle($event: MouseEvent) {
        this.op()?.toggle($event)
    }
}