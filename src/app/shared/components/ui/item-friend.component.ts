import { Component, computed, input, output } from "@angular/core";
import { Avatar } from "primeng/avatar";
import { Badge } from "primeng/badge";
import { TUniqId } from "../../types/uniq-id.type";

@Component({
    selector: 'app-item-friend',
    imports: [Badge, Avatar],
    template: `
        <div (click)="onSelect.emit()" class="{{isSelected() ? 'bg-surface-200 dark:bg-surface-800 text-surface-800 dark:text-surface-100' : ''}} px-3 py-2 flex gap-3 items-center hover:bg-emphasis transition-all duration-200 cursor-pointer rounded">
            <div class="relative flex items-center flex-col justify-center">
                @if(isOnline()) {
                    <p-badge class="absolute top-1 right-0 p-[1px] backdrop-blur-md" severity="success"/>
                }
                <p-avatar image="{{urlAvatar()}}" styleClass="font-medium text-base" size="large" shape="circle"/>
            </div>
            <div class="text-color-emphasis flex-1">
                <div class="flex gap-1 items-start justify-between">
                    <div class="text-color text-lg line-clamp-1 flex-1 font-medium leading-6">{{name()}}</div>
                </div>
                @if(mutualFriends() > 0) {
                    <p class="text-sm line-clamp-1 leading-6 text-muted-color">
                        {{mutualFriends()}} mutual friends
                    </p>
                }
            </div>
        </div>`
})
export class ItemFriendComponent {
    onSelect = output<void>()
    idSelected = input<string>()
    mutualFriends = input<number>(0)
    urlAvatar = input.required<string|null>()
    name = input.required<string>()
    isOnline = input.required<boolean>()
    idUser = input<TUniqId>()

    isSelected = computed(() => this.idSelected() === this.idUser())

}