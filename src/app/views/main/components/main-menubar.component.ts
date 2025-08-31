import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'app-main-menubar',
    imports: [
        RouterLink,
        RouterLinkActive,
    ],
    template: `
        <div class="justify-between py-2 sm:py-4 h-full overflow-auto flex items-center">
            @for (item of items; track $index) {
                <div
                [routerLink]="[ item.routerLink ]"
                routerLinkActive="text-primary"
                class="{{item.disabled ? 'hidden' : ''}} flex items-center flex-1 justify-center p-3 gap-2 cursor-pointer">
                    <i class="{{item.icon}}" style="font-size: 1.5rem"></i>
                    <span class="text-sm">{{item.label}}</span>
                </div>
            }
        </div>`
})
export class MainMenubar {

    items: MenuItem[] = [
        { label: 'Chat', icon: 'pi pi-comment', routerLink: './convers'},
        { label: 'Menu', icon: 'pi pi-bars', routerLink: './menu'},
    ];
}