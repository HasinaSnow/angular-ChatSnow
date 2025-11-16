import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BreakpointService } from "../../../../../shared/services/breakpoint.service";
import { Message } from "primeng/message";
import { ArchiveService } from "../archive.service";

@Component({
    selector: 'app-archive-list',
    imports: [Message],
    template: `
    <div class="pl-1 w-full h-full flex flex-col gap-2 overflow-auto">
        <div class="flex-1 pr-1 flex flex-col gap-1 overflow-auto">
            <p-message size="small" severity="info" class="m-1">
                <p class="text-color font-normale max-md:text-sm">
                    Ouvrez une discussion pour en savroir plus sur la personne qui vous l'envoie. Elle ne saura pas que vous l'avez vue tant que vous n'aurez pas répondu
                </p>
            </p-message>
            <!-- <app-item-convers (onSelect)="selectComponent()" [idSelected]="'bf'" /> -->
        </div>
    </div>`
})
export class ArchiveListComponent implements OnInit {
    private router = inject(Router)
    private bpService = inject(BreakpointService)
    readonly bp = this.bpService.breakpoint
    private archiveService = inject(ArchiveService)

    ngOnInit(): void {
        if(!this.bpService.isMobile())
            this.router.navigateByUrl('/menu/archives/bf')
    }

    selectComponent() {
        if(!this.bpService.isMobile() && this.bpService.screenWidth() <= this.bp.lg)
            this.archiveService.switchToComponent('outlet')
    }
}