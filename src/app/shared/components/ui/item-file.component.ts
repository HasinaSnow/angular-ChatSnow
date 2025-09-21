import { Component, input, OnInit } from '@angular/core';
import { Chip } from 'primeng/chip'

@Component({
    selector: 'app-item-file',
    template: `
    <p-chip styleClass="!rounded w-full">
        <i class="pi pi-file"></i>
        <a href="{{filename()}}" target="_blank">{{filename()}}</a>
    </p-chip>
    `,
    imports: [Chip]
})
export class ItemFileComponent implements OnInit {
    filename = input.required<string>()

    ngOnInit() { }
}