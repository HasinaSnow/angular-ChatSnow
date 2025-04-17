import { Component, OnInit, output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';

@Component({
    selector: 'app-convers-msg-header',
    imports: [AvatarModule, ButtonModule, TextareaModule],
    template: `
    <div class="w-full flex items-center justify-between py-3 px-2 gap-1 border-b border-surface">
        <!-- left -->
        <div class="flex items-center gap-1">
            <p-button (onClick)="onCancel.emit()" icon="pi pi-arrow-left text-muted-color" rounded="true" class="md:hidden" size="large" variant="text" severity="secondary" />
            <p-avatar image="./favicon.ico" class="mr-2" size="large" shape="circle"/>
            <div class="flex-1">
                <div class="text-color font-medium leading-6 cursor-pointer hover:text-muted-color-emphasis transition-colors">PrimeTek</div>
                <div class="text-muted-color leading-5 line-clamp-1 mt-1">Cody Fisher, Esther Howard, Jerome Bell, Kristin Watson, Ronald Richards, Darrell Steward</div>
            </div>
        </div>
        <!-- right -->
        <div class="flex items-center gap-1">
            <p-button icon="pi pi-search" class="border-0 shadow-none" variant="text" outlined="true" severity="secondary"/>
            <p-button (onClick)="onGoToInfo.emit()" icon="pi pi-info-circle" class="border-0 shadow-none lg:hidden" variant="text" outlined="true" severity="secondary"/>
        </div>
    </div>
    `
})

export class ConversMsgHeaderComponent implements OnInit {
    onCancel = output()
    onGoToInfo = output()

    constructor() { }

    ngOnInit() { }
}