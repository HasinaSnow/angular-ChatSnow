import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { Stepper, StepList, Step, StepPanels, StepPanel } from 'primeng/stepper';
import { Button } from "primeng/button";
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TSuggestion } from '../../../../../shared/types/suggestion.type';
import { ItemUserCheckComponent } from "../../../../../shared/components/ui/item-user-check.component";

@Component({
    selector: 'app-convers-group-new',
    imports: [Stepper, StepList, Step, StepPanels, StepPanel, Button, IconField, InputIcon, InputText, FormsModule, ItemUserCheckComponent],
    template: `
    <div class="card flex justify-center">
        <p-stepper [value]="1" class="basis-[50rem]">
            <p-step-list>
                <p-step [value]="1" class="flex flex-row flex-auto gap-2">
                    <ng-template #content let-activateCallback='activateCallback' let-value='value'>
                        <button (click)="activateCallback()" class="bg-transparent border-0 inline-flex flex-col gap-2">
                            <span class="{{value <= activeStep() ? 'bg-primary text-primary-contrast border-primary' : 'border-surface'}}  rounded-full border-2 w-12 h-12 inline-flex items-center justify-center">
                                <i class="pi pi-users"></i>
                            </span>
                        </button>
                    </ng-template>
                </p-step>
                <p-step [value]="2" class="flex flex-row flex-auto gap-2">
                    <ng-template #content let-activateCallback='activateCallback' let-value='value'>
                        <button (click)="activateCallback()" class="bg-transparent border-0 inline-flex flex-col gap-2">
                            <span class="{{value <= activeStep() ? 'bg-primary text-primary-contrast border-primary' : 'border-surface'}}  rounded-full border-2 w-12 h-12 inline-flex items-center justify-center">
                                <i class="pi pi-pen"></i>
                            </span>
                        </button>
                    </ng-template>
                </p-step>
                <p-step [value]="3" class="flex flex-row flex-auto gap-2">
                    <ng-template #content let-activateCallback='activateCallback' let-value='value'>
                        <button (click)="activateCallback()" class="bg-transparent border-0 inline-flex flex-col gap-2">
                            <span class="{{value <= activeStep() ? 'bg-primary text-primary-contrast border-primary' : 'border-surface'}}  rounded-full border-2 w-12 h-12 inline-flex items-center justify-center">
                                <i class="pi pi-id-card"></i>
                            </span>
                        </button>
                    </ng-template>
                </p-step>
            </p-step-list>
            <p-step-panels>
                <p-step-panel [value]="1">
                    <ng-template #content let-activateCallback="activateCallback">
                        <div class="flex flex-col">
                            <div class="flex-1 overflow-auto">
                                <h2>Add participants</h2>
                                <p-iconfield styleClass="w-full">
                                    <p-inputicon styleClass="pi pi-search" />
                                    <input type="text" [(ngModel)]="searchKey" pInputText placeholder="Search" class="w-full" />
                                </p-iconfield>
                                <div class="w-full flex gap-3 min-h-min overflow-y-auto pb-3 px-2">
                                    <!-- @for (user of userSuggestions(); track user.idUser) {
                                        <app-item-user-check
                                            [name]="user.name"
                                            [urlAvatar]="user.urlAvatar"
                                            [isOnline]="user.isOnline"
                                            [(check)]="user.checked"/>
                                    } -->
                                </div>
                            </div>
                            <div class="flex pt-6 justify-end">
                                <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(2)" />
                            </div>
                        </div>
                    </ng-template>
                </p-step-panel>
                <p-step-panel [value]="2">
                    <ng-template #content let-activateCallback="activateCallback">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content II
                            </div>
                        </div>
                        <div class="flex pt-6 justify-between">
                            <p-button label="Back" severity="secondary" icon="pi pi-arrow-left" (onClick)="activateCallback(1)" />
                            <p-button label="Next" icon="pi pi-arrow-right" iconPos="right" (onClick)="activateCallback(3)" />
                        </div>
                    </ng-template>
                </p-step-panel>
                <p-step-panel [value]="3">
                    <ng-template #content let-activateCallback="activateCallback">
                        <div class="flex flex-col h-48">
                            <div class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
                                Content III
                            </div>
                        </div>
                        <div class="flex pt-6 justify-start">
                            <p-button label="Back" icon="pi pi-arrow-left" iconPos="right" (onClick)="activateCallback(2)" />
                        </div>
                    </ng-template>
                </p-step-panel>
            </p-step-panels>
        </p-stepper>
    </div>
    `
})
export class ConversGroupNewComponent {
    activeStep: WritableSignal<number> = signal(1)
    searchKey: WritableSignal<string> = signal('')
    addedParticipants: WritableSignal<TSuggestion[]> = signal([])

}