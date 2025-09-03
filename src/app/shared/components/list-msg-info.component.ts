import { Component, Input, input, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';
import { Avatar } from "primeng/avatar";

export interface IInfoItem {
    label: string,
    icon?: string,
    img?: string,
    description?: string,
    wrapText?: boolean,
    command?: ($event: MouseEvent) => void,
    inputCheck?: {
        check: WritableSignal<boolean>,
        disabled?: boolean,
        command?: ($event: ToggleSwitchChangeEvent) => void,
    },
    hide?: boolean,
    routerLink?: string,
    styleClass?: string
    severity?: 'danger'|'primary'|'contrast',
    items?: IInfoItem[],
}

@Component({
    selector: 'app-list-msg-info',
    imports: [ToggleSwitchModule, FormsModule, RouterLink, Avatar],
    template: `
        @for (item of items(); track $index) {
            @if(!item.hide) {
                <div [routerLink]="item.routerLink" class="px-2 text-color mb-5 w-full">
                        <h4 class="{{item.severity ? severity(item.severity) : 'text-muted-color'}} text-md mb-3 flex items-center gap-2">
                            @if(item.icon) {
                                <i class="{{item.icon}}" style="font-size: 1.2rem"></i>
                            }
                            {{item.label}}
                        </h4>
                    @if (item.items) {
                        <div class="flex flex-col py-1 px-2 gap-5">
                            @for(item2 of item.items; track $index) {
                                @if(!item2.hide) {
                                    <div [routerLink]="item2.routerLink" (click)="item2?.command ? item2?.command($event) : null" class="flex cursor-pointer justify-between w-full items-center gap-6">
                                        <div class="{{severity(item2.severity)}} flex space-x-2 items-center gap-3 text-lg">
                                            @if(item2.icon) {
                                                <i class="{{item2.icon}} leading-none" style="font-size: 1.2rem"></i>
                                            }
                                            @if(item2.img) {
                                                <p-avatar image="{{item2.img}}" styleClass="font-medium text-base flex" size="normal" shape="circle"/>
                                            }
                                            <div class="flex flex-col gap-1 flex-1 leading-none">
                                                <span class="">{{item2.label}}</span>
                                                @if(item2.description) {
                                                    <span class="text-muted-color text-sm {{!item2.wrapText ? 'line-clamp-1' : ''}}">{{item2.description}}</span>
                                                }
                                            </div>
                                        </div>
                                        @if(item2.inputCheck) {
                                            <p-toggleswitch styleClass="m-auto" [disabled]="item.inputCheck?.disabled ?? false" (onChange)="item2?.inputCheck?.command ? item2?.inputCheck?.command($event) : default()" [(ngModel)]="item2.inputCheck.check" class="leading-0"/>
                                        }
                                    </div>
                                }
                            }
                        </div>
                    }
                </div>
            }
        }
    `
})
export class ListMsgInfoComponent {

    items = input.required<IInfoItem[]>()

    severity(value: IInfoItem['severity']|undefined) {
        switch (value) {
            case 'danger': return 'text-red-500'
            case 'primary': return 'text-primary'
            case 'contrast': return 'text-muted-color'
            default: return 'text-color'
        }
    }

    default() {}
}