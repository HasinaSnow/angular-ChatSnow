import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuItem } from "primeng/api";
import { TooltipModule } from "primeng/tooltip";

@Component({
    selector: 'app-menu-bar',
    imports: [RouterLink, RouterLinkActive, TooltipModule],
    template: `
        <div>
            @for (item of items; track $index) {
                <div
                [routerLink]="[ item.routerLink ]"
                routerLinkActive="bg-white border-primary text-primary border dark:bg-surface-950"
                pTooltip="{{item.label}}"
                tooltipStyleClass="ml-1 font-semibold"
                class="{{item.disabled ? 'hidden' : ''}} flex-1 hover:bg-surface-0 flex items-center justify-center p-3 hover:text-primary dark:hover:bg-surface-950 hover:border hover:border-primary transition-all rounded-md text-color gap-2 cursor-pointer">
                    <i class="{{item.icon}}" style="font-size: 1.5rem"></i>
                    <span class="text-xs font-light">{{item.label}}</span>
                </div>
            }
        </div>
    `
})
export class ConversMenuBar {
    items: MenuItem[] = [
        { label: 'Home', icon: 'pi pi-home', routerLink: '../profile'},
        { label: 'Chat', icon: 'pi pi-comment', routerLink: '../convers'},
    ];
}