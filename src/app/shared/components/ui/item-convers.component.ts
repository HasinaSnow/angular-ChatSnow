import { Component, computed, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { IConversLastMsg } from '../../../core/entities/convers.entity';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-item-convers',
    imports: [BadgeModule, AvatarModule, RouterLink, RouterLinkActive, DatePipe],
    template: `
        <div (click)="onSelect.emit()" [routerLink]="['./', idSelected()]" routerLinkActive="bg-surface-200 dark:bg-surface-800 text-surface-800 dark:text-surface-100" class="p-3 flex gap-2 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded overflow-hidden">
            <div class="relative flex items-center flex-col justify-center">
                @if(isOnline()) {
                    <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
                }
                <p-avatar image="{{urlAvatar()}}" styleClass="font-medium text-base" size="large" shape="circle"/>
            </div>
            <div class="text-color-emphasis">
                <div class="flex gap-1 items-start justify-between">
                    <div class="flex-1 text-color text-md font-medium leading-6 line-clamp-1">{{name()}}</div>
                    <div class="text-xs text-muted-color">{{ lastMsg()?.createdAt | date: 'dd MMM'}}</div>
                </div>
                <p class="text-sm flex line-clamp-1 gap-1 leading-6 text-muted-color overflow-hidden">
                    @if(unreadCount() > 0) {
                        <p-badge size="small" value="{{unreadCount() > 9 ? '+9': unreadCount()}}" styleClass="bg-primary !rounded-full !p-0.5 !flex !items-center !w-fit !justify-center !text-xs"/>
                    }
                    <span class="font-semibold line-clamp-1 max-w-16">{{litleAuthorName()}}:</span>
                    <span class="flex-1 line-clamp-1">{{lastMsg()?.content}}</span>

                </p>
            </div>
        </div>
    `
})
export class ItemConversComponent {
    onSelect = output()
    idSelected = input<string>()
    urlAvatar = input.required<string|null>()
    name = input.required<string>()
    lastMsg = input.required<IConversLastMsg|null>()
    updatedAt = input.required<Date|null>()
    createdAt = input.required<Date>()
    isOnline = input.required<boolean>()
    unreadCount = input.required<number>()

    litleAuthorName = computed(() => {
        const names = this.lastMsg()?.authorName as string
        return names.split(' ').reduce((p, n) => p.length < n.length ? p : n)
    })
}