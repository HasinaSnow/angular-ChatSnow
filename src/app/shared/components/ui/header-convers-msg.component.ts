import { Component, computed, inject, input, output, signal, WritableSignal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";
import { InputText } from 'primeng/inputtext';
import { BreakpointService } from '../../services/breakpoint.service';
import { ConversEntity } from '../../../core/entities/convers.entity';
import { LittleNamePipe } from '../../pipes/little-name.pipe';

@Component({
    selector: 'app-header-convers-msg',
    imports: [AvatarModule, ButtonModule, TextareaModule, IconField, InputIcon, InputText, LittleNamePipe],
    template: `
    <div class="w-full flex items-center justify-between py-3 px-2 gap-1 border-b border-surface">
        @if(!isSearching()) {
            <!-- left -->
            <div class="flex items-center gap-1">
                @if(withCancel()) {
                    <p-button (onClick)="onCancel.emit()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
                }
                <p-avatar image="{{oneConvers()?.urlAvatar}}" class="mr-2" size="large" shape="circle"/>
                <div class="flex-1">
                    <div class="text-color line-clamp-1 font-medium leading-6 cursor-pointer hover:text-muted-color-emphasis transition-colors">{{oneConvers()?.name}}</div>
                    <div class="text-muted-color leading-5 line-clamp-1 mt-1">
                        @for (pName of participantNames(); track $index) {
                            <span>{{pName | littleName}} ,</span>
                        }
                    </div>
                </div>
            </div>
            <!-- right -->
            <div class="flex items-center gap-1">
                <p-button (onClick)="switchSearch(true)" icon="pi pi-search" rounded="true" size="large" variant="text" severity="secondary" />
                @if(!hiddenInfoBtn()) {
                    <p-button (onClick)="onGoToInfo.emit()" icon="pi pi-info-circle" rounded="true" size="large" variant="text" severity="secondary" />
                }
            </div>
        } @else {
            <p-iconfield styleClass="w-full">
                <p-inputicon styleClass="pi pi-search" />
                <input type="text" pInputText placeholder="Search in conversation" class="w-full" />
            </p-iconfield>
            <p-button (onClick)="switchSearch(false)" icon="pi pi-times" severity="secondary" variant="text" styleClass="m-0"></p-button>
        }

    </div>
    `
})

export class HeaderConversMsgComponent {
    private bpService = inject(BreakpointService)
    onCancel = output()
    onGoToInfo = output()
    oneConvers = input.required<ConversEntity|null>()

    participantNames = computed(() => {
        return this.oneConvers()?.participants.map(p => p.name)
    })

    isSearching: WritableSignal<boolean> = signal(false)
    withCancel = input<boolean>(this.withCancelBtn())
    hiddenInfoBtn = input<boolean>(false)

    withCancelBtn() {
        return this.bpService.isMobile()
    }

    switchSearch(value: boolean) { this.isSearching.set(value) }

}