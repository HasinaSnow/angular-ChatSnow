import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-convers-list-header',
    imports: [ButtonModule, IconFieldModule, InputIconModule, AvatarModule, InputTextModule],
    template: `
    <div class="p-2 w-full top-0 z-10">
        <!-- title -->
        <div class="flex justify-between text-color">
            <!-- left -->
            <span class="flex items-center gap-2 font-medium text-2xl pl-3">
                <!-- if mobile screen -->
                <p-button icon="pi pi-bars text-muted-color" class="sm:hidden" rounded="true" size="large" variant="text" severity="secondary" />
                <h2>Chat</h2>
            </span>
            <!-- right -->
            <p-button icon="pi pi-plus" class="border-0 shadow-none" variant="text" outlined="true" severity="secondary"/>
        </div>

        <!-- search -->
        <div class="w-full px-2 my-4">
            <p-iconfield styleClass="w-full">
                <p-inputicon styleClass="pi pi-search" />
                <!-- <p-inputicon styleClass="pi pi-spinner pi-spin" /> -->
                <input type="text" variant="filled" pInputText placeholder="Search" class="w-full" />
            </p-iconfield>
        </div>
    </div>`
})
export class ConversListHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}