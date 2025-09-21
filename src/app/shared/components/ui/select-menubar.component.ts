import { Component, input, model } from "@angular/core";
import { SelectButton } from "primeng/selectbutton";
import { Badge } from "primeng/badge";
import { FormsModule } from "@angular/forms";

export interface ISelectMenuBarOptions {
    label?: string,
    icon?: string,
    value: string,
    badge?: number
}

@Component({
    selector: 'app-select-menubar',
    imports: [SelectButton, Badge, FormsModule],
    template: `
        <p-selectbutton [options]="options()" [(ngModel)]="selectedOption" optionLabel="label" optionValue="value">
            <ng-template #item let-item>
                @if(item.icon) {
                    <i class="{{item.icon}}"></i>
                }
                @if(item.label) {
                    <span>{{item.label}}</span>
                }
                @if(item.badge) {
                    <p-badge size="small" value="{{item.badge}}" class="bg-primary"/>
                }
            </ng-template>
        </p-selectbutton>`
})
export class SelectMenubarComponent {
    options = input<ISelectMenuBarOptions[]>()
    selectedOption = model.required<ISelectMenuBarOptions['value']>()
}