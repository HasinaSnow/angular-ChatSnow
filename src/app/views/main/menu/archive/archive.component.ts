import { Component, inject, OnInit } from "@angular/core";
import { BreakpointService } from "../../../../shared/services/breakpoint.service";
import { Location } from "@angular/common";
import { HeaderTitleComponent } from "../../../../shared/components/ui/header-title.component";
import { RouterOutlet } from "@angular/router";
import { ArchiveListComponent } from "./archive-list/archive-list.component";
import { ArchiveService } from "./archive.service";

@Component({
    selector: 'app-archive',
    imports: [RouterOutlet, HeaderTitleComponent, ArchiveListComponent],
    template: `
        @if(bpService.isMobile()) {
            <div class="p-2 text-color w-full h-full flex flex-col gap-2 overflow-auto">
                <app-header-title [withCancelBtn]="true" class="pt-1 pl-2" [title]="'Archives'"/>
                <div class="flex-1 overflow-auto">
                    <app-archive-list/>
                </div>
            </div>
        } @else if(bpService.screenWidth() < bp.lg) {
            @switch(selectedComponent()) {
                @case ('list') {
                    <div class="p-2 w-full h-full flex gap-3 flex-col overflow-auto">
                        <app-header-title class="pt-2 pl-2" [title]="'Archives'" [icon]="'pi pi-comments'"/>
                        <div class="flex-1 px-1 overflow-auto">
                            <app-archive-list/>
                        </div>
                    </div>
                    }
                @case ('outlet') {
                    <router-outlet/>
                }
            }
        } @else {
            <div class="px-1 py-2 grid w-full h-full grid-cols-5 overflow-auto gap-3">
                <div class="col-span-2 flex gap-3 flex-col overflow-auto">
                    <app-header-title class="pt-2 pl-2" [title]="'Archives'" [icon]="'pi pi-comments'"/>
                    <div class="flex-1 overflow-auto">
                        <app-archive-list/>
                    </div>
                </div>
                <div class="col-span-3 border-l border-surface overflow-auto">
                    <router-outlet/>
                </div>
            </div>
        }`,
})
export class ArchiveComponent implements OnInit {
    private location = inject(Location)
    readonly bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint

    private archiveService = inject(ArchiveService)
    readonly selectedComponent = this.archiveService.selectedComponent

    ngOnInit(): void {
        this.archiveService.cancelToDefault()
    }

    cancel() {
        this.location.back()
    }
}