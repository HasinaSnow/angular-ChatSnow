import { Location } from "@angular/common";
import { Component, inject, input } from "@angular/core";
import { Button } from "primeng/button";

@Component({
    selector: 'app-header-title',
    template: `
    <div class="flex items-center text-color gap-3">
        @if(icon()) {<i class="{{icon()}}" style="font-size: 1.5rem"></i>}
        @if(withCancelBtn()) {<p-button class="lg:hidden" (onClick)="location.back()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />}
        <h2 class="text-2xl font-semibold leading-none">{{title()}}</h2>
    </div>`,
    imports: [Button]
})
    export class HeaderTitleComponent {
    location = inject(Location)    
    title = input.required<string>()
    icon = input<string>()
    withCancelBtn = input<boolean>(false)

}