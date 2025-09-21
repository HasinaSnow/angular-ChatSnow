import { Component, inject, OnInit } from "@angular/core";
import { MenuListComponent } from "./components/menu-list.component";
import { Router, RouterOutlet } from "@angular/router";
import { ButtonModule } from "primeng/button";
import { BreakpointService } from "../../../shared/services/breakpoint.service";
import { HeaderTitleComponent } from "../../../shared/components/ui/header-title.component";

@Component({
    selector: 'app-menu',
    imports: [MenuListComponent, RouterOutlet, ButtonModule, HeaderTitleComponent],
    template: `
        @if(bpService.isMobile()) {
            <div class="w-full h-full p-2 flex flex-col gap-4">
                <app-header-title class="pt-3 pl-3" [title]="'Menu'" [icon]="'pi pi-bars'"/>
                <app-menu-list/>
            </div>
        } @else {
            <div class="p-2 md:grid md:grid-rows-1 md:grid-cols-10 lg:grid-cols-8 w-full h-full overflow-auto">
                <div class="p-2 md:col-span-4 lg:col-span-2 border-r border-surface flex flex-col gap-3 overflow-auto">
                    <app-header-title class="pt-2 pl-2" [title]="'Menu'" [icon]="'pi pi-bars'"/>
                    <app-menu-list class="flex-1 overflow-auto"/>
                </div>
                <div class="md:col-span-6 lg:col-span-6">
                    <router-outlet/>
                </div>
            </div>
        }
    `,
})
export class MenuComponent implements OnInit {
    private router = inject(Router)
    readonly bpService = inject(BreakpointService)

    ngOnInit(): void {
        if(!this.bpService.isMobile())
            this.router.navigateByUrl('/menu/profile')
    }

}