import { Location } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Button } from "primeng/button";
import { IInfoItem, ListMenuItemComponent } from "../../../../../shared/components/ui/list-menu-item.component";
import { Router } from "@angular/router";
import { MsgRequestInfoHeaderComponent } from "./components/msg-request-info-header.component";

@Component({
    selector: 'app-msg-request-info',
    imports: [Button, ListMenuItemComponent, MsgRequestInfoHeaderComponent],
    template: `
        <div class="relative h-full w-full flex flex-col px-3 py-5 overflow-auto">
            <!-- cancel button -->
            <div class="absolute top-3 left-2">
                <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>

            <!-- options button -->
            <div class="absolute top-3 right-2">
                <p-button (onClick)="cancel()" icon="pi pi-ellipsis-v text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            </div>

            <!-- header -->
            <app-msg-request-info-header></app-msg-request-info-header>

            <!-- list info -->
            <div class="my-2">
                <app-list-menu-item [items]="requestInfoItems"/>
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