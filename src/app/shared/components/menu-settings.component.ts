import { Component, input, OnInit, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ToggleSwitchChangeEvent, ToggleSwitchModule } from 'primeng/toggleswitch';

export interface IItemSettings {
    label: string,
    icon?: string,
    inputCheck?: {
        check: WritableSignal<boolean>,
        disabled?: boolean,
        command?: ($event: ToggleSwitchChangeEvent) => void,
    },
    routerLink?: string,
    styleClass?: string
    items?: IItemSettings[]
}

@Component({
    selector: 'app-menu-settings',
    imports: [ToggleSwitchModule, FormsModule, RouterLink],
    template: `
        @for (item of items(); track $index) {
            <div [routerLink]="item.routerLink || ''" class="px-2 mb-4 w-full">
                    <h4 class="text-md text-muted-color mb-2 border-b border-surface flex items-center gap-2">
                        @if(item.icon) {
                            <i class="{{item.icon}}"></i>
                        }
                        {{item.label}}
                    </h4>
                @if (item.items) {
                    <div class="flex flex-col gap-3">
                        @for(item2 of item.items; track $index) {
                            <div [routerLink]="item2.routerLink || ''" class="flex justify-between items-center gap-6">
                                <div class="flex items-center gap-2">
                                    @if(item2.icon) {
                                        <i class="{{item2.icon}}"></i>
                                    }
                                    <span class="text-color text-md">{{item2.label}}</span>
                                </div>
                                @if(item2.inputCheck) {
                                    <p-toggleswitch styleClass="m-auto"[disabled]="item.inputCheck?.disabled ?? false" (onChange)="item.inputCheck?.command ? item.inputCheck?.command($event) : default()" [(ngModel)]='item2.inputCheck.check' class="leading-0"/>
                                }
                            </div>
                        }
                    </div>
                }
            </div>
        }
    `
})
export class MenuSettingsComponent implements OnInit {

    items = input.required<IItemSettings[]>()

    ngOnInit() { }

    default() {}
}