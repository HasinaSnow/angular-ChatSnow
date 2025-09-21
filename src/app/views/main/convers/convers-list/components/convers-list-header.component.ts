import { Component, inject } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { BreakpointService } from '../../../../../shared/services/breakpoint.service';
import { HeaderTitleComponent } from "../../../../../shared/components/ui/header-title.component";

@Component({
    selector: 'app-convers-list-header',
    imports: [ButtonModule, IconFieldModule, InputIconModule, AvatarModule, InputTextModule, HeaderTitleComponent],
    template: `
    <div class="p-2 w-full top-0 z-10">
        <!-- title -->
        <div class="flex justify-between items-center text-color">
            <!-- left -->
            <span class="flex items-center gap-2 font-medium text-2xl">
                <!-- if mobile screen -->
                 @if(bpService.isMobile()) {
                     <img src="./favicon.ico" class="sm:hidden" alt="logo" height="30" width="30">
                     <h2 class="md:ml-3 leading-0">Chat</h2>
                 } @else {
                    <app-header-title [title]="'Chat'" [icon]="'pi pi-comment'"/>
                 }
            </span>
            <!-- right -->
            <p-button icon="pi pi-plus" class="border-0 shadow-none" variant="text" rounded="true" outlined="true" severity="secondary"/>
        </div>

        <!-- search -->
        
    </div>`
})
export class ConversListHeaderComponent {
    readonly bpService = inject(BreakpointService)

}