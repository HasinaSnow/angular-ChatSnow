import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainSidebarComponent } from "./components/main-sidebar.component";
import { BreakpointService } from '../../shared/services/breakpoint.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-main',
    imports: [
        CommonModule,
        RouterOutlet,
        MainSidebarComponent,
    ],
    template: `
        <div class="sm:flex h-full w-full sm:p-3 lg:p-4 xl:p-6 bg-surface-100 dark:bg-surface-800">
            <!-- main sidebar -->
            <div class="h-full hidden sm:block">
                @if(bpService.screenWidth() >= bpService.breakpooint.sm) {
                    <app-main-sidebar/>
                }
            </div>

            <!-- main content -->
            <div class="md:flex-1 w-full h-full sm:rounded-xl md:rounded-2xl border bg- border-surface bg-surface-0 dark:bg-surface-950">
                <router-outlet/>
            </div>

        </div>`
})
export class MainComponent implements OnInit {
    bpService = inject(BreakpointService)
    ngOnInit() { }
}