import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MainSidebarComponent } from "./components/main-sidebar.component";
import { CommonModule } from '@angular/common';
import { MainMenubar } from "./components/main-menubar.component";

@Component({
    selector: 'app-main',
    imports: [
        CommonModule,
        RouterOutlet,
        MainSidebarComponent,
        MainMenubar
    ],
    template: `
        <div class="flex flex-col sm:flex-row h-screen-safe w-full sm:p-3 lg:p-4 xl:p-6">
            <!-- main sidebar -->
            <div class="sm:h-full sm:block hidden">
                <app-main-sidebar/>
            </div>

            <!-- main content -->
            <div class="flex-1 overflow-auto sm:rounded-xl md:rounded-2xl border border-surface bg-surface-0 dark:bg-surface-950">
                <router-outlet/>
            </div>

            @if(showMenuBar()) {
                <div class="sm:hidden border-t border-surface bg-surface-0 dark:bg-surface-950">
                    <app-main-menubar/>
                </div>
            }

        </div>`
})
export class MainComponent {
    private router = inject(Router)

    showMenuBar() {
        const paths = this.router.url.split('/')
        const lastPath = paths[paths.length - 1]
        return lastPath === 'convers' || lastPath === 'menu'
    }
}