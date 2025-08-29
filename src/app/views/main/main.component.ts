import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSidebarComponent } from "./components/main-sidebar.component";
import { CommonModule } from '@angular/common';
import { BreakpointService } from '../../shared/services/breakpoint.service';
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
        <div class="flex flex-col sm:flex-row h-full w-full sm:p-3 lg:p-4 xl:p-6 bg-surface-100 dark:bg-surface-800">
            <!-- main sidebar -->
            <div class="sm:h-full sm:block hidden">
                <app-main-sidebar/>
            </div>

            <!-- main content -->
            <div class="flex-1 overflow-auto w-full h-full sm:rounded-xl md:rounded-2xl border border-surface bg-surface-0 dark:bg-surface-950">
                <router-outlet/>
            </div>

            <div class="sm:hidden border-t border-surface bg-surface-0 dark:bg-surface-950">
                <app-main-menubar/>
            </div>

        </div>`
})
export class MainComponent implements OnInit {
    ngOnInit() { }
}