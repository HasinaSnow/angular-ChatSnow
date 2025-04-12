import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-convers-info-header',
    imports: [AvatarModule, ButtonModule],
    template: `
    <div class=" flex flex-col items-center justify-center pb-3">
        <p-avatar image="./favicon.ico" styleClass="w-32 w-32" size="xlarge" shape="circle"/>
        <div class="leading-6 font-medium text-color text-2xl mt-3 w-full text-center">PrimeTek</div>
        <div class="leading-5 text-muted-color text-md mt-1 w-full text-center">{{'@primetek'}}</div>

        <div class="flex items-center justify-center flex-wrap gap-4 mt-3">
            <p-button icon="pi pi-phone text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
            <p-button icon="pi pi-video text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
            <p-button icon="pi pi-user-plus text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
        </div>
    </div>`
})
export class ConversInfoHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}