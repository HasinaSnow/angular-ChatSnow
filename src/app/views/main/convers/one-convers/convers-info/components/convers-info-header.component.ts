import { Component, computed, input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { ConversEntity } from '../../../../../../core/entities/convers.entity';

@Component({
    selector: 'app-convers-info-header',
    imports: [AvatarModule, ButtonModule],
    template: `
    <div class=" flex flex-col items-center justify-center pb-3">
        <p-avatar image="{{oneConvers()?.urlAvatar}}" styleClass="w-32 w-32" size="xlarge" shape="circle"/>
        <div class="leading-6 font-medium text-color text-2xl mt-3 w-full line-clamp-1 text-center">{{conversName()}}</div>
        <!-- <div class="leading-5 text-muted-color text-md mt-1 w-full text-center">{{oneConvers().participants[1].}}</div> -->

        <div class="flex items-center justify-center flex-wrap gap-4 mt-3">
            <p-button icon="pi pi-phone text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
            <p-button icon="pi pi-video text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
            <p-button icon="pi pi-user-plus text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
        </div>
    </div>`
})
export class ConversInfoHeaderComponent {
    oneConvers = input.required<ConversEntity|null>()
    conversName = computed(() => {
        const one = this.oneConvers()
        const name = one?.type === 'private'
            ? one.participants[1].name
            : one?.participants.map(user => user.name).join(', ')
        return one?.name ?? name
    })
}