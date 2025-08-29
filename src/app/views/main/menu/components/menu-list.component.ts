import { Component, inject } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { MenuItem } from "primeng/api";
import { AvatarModule } from "primeng/avatar";
import { BadgeModule } from "primeng/badge";
import { ButtonModule } from "primeng/button";
import { MenuService } from "../menu.service";

@Component({
    selector: 'app-menu-list',
    imports: [
        AvatarModule,
        ButtonModule,
        BadgeModule,
        RouterLink,
        RouterLinkActive
    ],
    template: `
        <div class="flex flex-col gap-4 p-2 text-color overflow-auto w-full h-full">
                <!-- account -->
                <div (click)="selectComponent($event, './profile')" routerLink="./profile" class="flex pb-3 border-b border-surface items-center gap-3 cursor-pointer">
                    <p-avatar image="./images/pdp1.jpg" styleClass="font-medium text-base" size="large" shape="circle"/>
                    <div class="flex flex-1 flex-col">
                        <span class="font-semibold text-md line-clamp-1">Hasina Niaina Snow</span>
                        <span class="text-sm text-muted-color line-clamp-1">hasina.niaina.snow</span>
                    </div>
                    <p-badge size="small" value="5" class="bg-primary"/>
                </div>

                <!-- items -->
                <div class="flex flex-1 flex-col gap-1 py-2 px-1 overflow-auto">
                    @for(item of items; track $index) {
                        <div (click)="selectComponent($event, item.routerLink)" routerLink="{{item.routerLink}}" routerLinkActive="text-primary bg-highlight-emphasis" class="flex gap-4 items-center hover:text-primary cursor-pointer p-2.5 rounded transition-all">
                            <i class="{{item.icon}}"></i>
                            <span class="flex-1 font-semibold text-md line-clamp-1">{{item.label}}</span>
                            @if(item.badge) {
                                <p-badge size="small" value="{{item.badge}}" class="bg-primary"/>
                            }
                        </div>
                    }
                </div>
        </div>
    `
})
export class MenuListComponent {
    private menuService = inject(MenuService)
    private router = inject(Router)

    items: MenuItem[] = [
        {
            label: 'Messages request',
            icon: 'pi pi-comments',
            routerLink: 'msg-request',
            badge: '3'
        },
        { 
            label: 'Invitations',
            icon: 'pi pi-users',
            routerLink: 'invitations',
        },
        { 
            label: 'Archives',
            icon: 'pi pi-database',
            routerLink: 'archives',
        },
    ]

    selectComponent($event: MouseEvent, currentRoute: string) {
        const url = this.router.url
        if(url.includes(currentRoute)) {
            $event.preventDefault()
            this.router.navigateByUrl(url)
        }
        this.menuService.switchComponent('menu-list')
    }

}