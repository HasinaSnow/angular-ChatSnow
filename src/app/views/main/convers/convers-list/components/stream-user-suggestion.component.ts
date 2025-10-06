import { Component, input, output } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { Badge } from 'primeng/badge';

@Component({
    selector: 'app-stream-user-suggestion',
    imports: [AvatarModule, Badge],
    template: `
    <span (click)="onSelect.emit()" class="relative flex flex-col items-center w-fit cursor-pointer">
        @if(isOnline()) {
            <p-badge class="absolute top-1 right-1 p-[1px] backdrop-blur-md" severity="success"/>
        }
        <p-avatar image="{{urlAvatar()}}" styleClass="font-medium text-base flex" size="large" shape="circle"/>
        <span class="text-xs text-color w-[59px] text-center line-clamp-1">{{name()}}</span>
    </span>`
})
export class StreamUserSuggestionComponent {
    onSelect = output<void>()
    idSelected = input<string>()
    name = input.required<string>()
    urlAvatar = input.required<string|null>()
    isOnline = input.required<boolean>()
}