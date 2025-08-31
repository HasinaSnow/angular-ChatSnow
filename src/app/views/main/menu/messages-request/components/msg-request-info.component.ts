import { Location } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Button } from "primeng/button";
import { Avatar } from "primeng/avatar";
import { IInfoItem, ListMsgInfoComponent } from "../../../../../shared/components/list-msg-info.component";
import { Router } from "@angular/router";

@Component({
    selector: 'app-msg-request-info',
    imports: [Button, Avatar, ListMsgInfoComponent],
    template: `
        <div class="relative h-full w-full flex flex-col px-3 py-5 overflow-auto">
            <div class="absolute top-3 left-2">
                <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>
            <div class="absolute top-3 right-2">
                <p-button (onClick)="cancel()" icon="pi pi-ellipsis-v text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>
            <div class="flex flex-col items-center justify-center py-3">
                <p-avatar image="./images/pdp1.jpg" styleClass="w-32 w-32" size="xlarge" shape="circle"/>
                <div class="leading-6 font-medium text-color text-2xl mt-3 w-full text-center">PrimeTek</div>
                <div class="leading-5 text-muted-color text-md mt-1 w-full text-center">{{'@primetek'}}</div>

                <div class="flex items-center justify-center flex-wrap gap-4 mt-3">
                    <p-button disabled="true" icon="pi pi-phone text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
                    <p-button disabled="true" icon="pi pi-video text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
                    <p-button disabled="true" icon="pi pi-user-plus text-muted-color" variant="text" rounded="true" size="large" severity="secondary" />
                </div>
            </div>
            <div class="my-2">
                <app-list-msg-info [items]="requestInfoItems"/>
            </div>
        </div>
    `
})
export class MsgRequestInfosComponent {
    private location = inject(Location)
    private router = inject(Router)

    requestInfoItems: IInfoItem[] = [
        {
            label: 'Discussion Informations',
            items: [
                {
                    label: 'All participants',
                    command: () => {
                        const paths = this.router.url.split('/')
                        const url = paths.filter(path => path !== paths[paths.length - 1]).join('/')
                        this.router.navigateByUrl(url + '/participants')
                    },
                    icon: 'pi pi-users'
                }
            ]
        },
        {
            label: 'Confidentialité et assistance',
            items: [
                {
                    label: 'Bloquer un membre',
                    icon: 'pi pi-info-circle'
                },
                {
                    label: 'Signaler',
                    icon: 'pi pi-flag-fill',
                    description: 'Laissez un commentaire ou signalez la conversation'
                }
            ]
        }
    ]

    cancel() { this.location.back() }
}