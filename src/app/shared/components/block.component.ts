import { Component, input, OnInit } from '@angular/core';
import { IInfoItem, ListMsgInfoComponent } from "./list-msg-info.component";
import { Button } from "primeng/button";

@Component({
    selector: 'app-block',
    imports: [ListMsgInfoComponent, Button],
    template: `
    <div class="flex flex-col items-center">
        <app-list-msg-info [items]="blockinfolist"/>
        <div class="flex gap-2 justify-center">
            @if(cancelBtnVisible()) {
                <p-button (onClick)="onConfirm()(false)" label="Cancel" severity="secondary" outlined="true" styleClass="m-0"/>
            }
            <p-button (onClick)="onConfirm()(true)" label="Block {{name()}}" severity="danger" styleClass="m-0"/>
        </div>
    </div>
    `
})

export class BlockComponent implements OnInit {
    name = input<string>()
    id = input<string>()
    onConfirm = input.required<(value: boolean) => void>()
    cancelBtnVisible = input<boolean>()

    blockinfolist: IInfoItem[] = [
        {
            label: '',
            items: [
                {
                    label: 'Retire cette personne des ami(e)s',
                    description: "Si vous $etes ami(e) avec une personne, la bloquer la retire de vos ami(e)s et l'empêche d'accéder à vôtre profil.",
                    wrapText: true,
                },
                {
                    label: "Empêche tout concact indésirable",
                    description: "Cette personne ne pourra pas vous appeler ou vous envoyer de messages en dehors des groupes.",
                    wrapText: true,
                },
                {
                    label: "Cette personne ne recevra pas de notification",
                    description: "Nous ne dirons pas à cette personne que vous l'avez bloquée. Débloquez-la depuis vos paramètre de confidentialité et de sécurité.",
                    wrapText: true,
                }
            ]
        }
    ]

    ngOnInit() { }
}