import { Component, input, OnInit } from '@angular/core';
import { Chip } from 'primeng/chip'

@Component({
    selector: 'app-item-link',
    template: `
    <p-chip styleClass="!rounded w-full">
        <i class="pi pi-link"></i>
        <a href="{{link()}}" target="_blank">{{link()}}</a>
    </p-chip>
    `,
    imports: [Chip]
})
export class ItemLinkComponent implements OnInit {
    link = input.required<string>()

    ngOnInit() { }
}