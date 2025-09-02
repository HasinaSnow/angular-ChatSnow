import { Component, input, OnInit, output } from '@angular/core';
import { GalleriaModule } from "primeng/galleria"

export interface IImage {
    src: string,
    thumbnailSrc: string,
    alt: string,
    title: string
}

@Component({
    selector: 'app-list-image',
    template: `
    @if(images() && images().length > 0) {
        <div class="grid grid-cols-5 h-fit gap-2 max-w-[800px]">
            @for(image of images(); track $index) {
                <img [src]="image.src" [alt]="image.alt" class="cursor-pointer object-cover rounded" (click)="imageClick($index)" style="display: block;">
            }
        </div>
    }
    <p-galleria
    [value]="images()"
    [(visible)]="displayCustom"
    [(activeIndex)]="activeIndex"
    containerClass="m-auto max-w-[90vw] md:max-w-[60vw] max-h-[90vh] flex items-center justify-center"
    [showIndicators]="false"
    [numVisible]="7"
    [circular]="true"
    [fullScreen]="true"
    [showThumbnails]="false">
        <ng-template #item let-item>
            <img [src]="item.src" [alt]="item.alt" class="cursor-pointer block max-w-[90vw] md:max-w-[60vw] max-h-[90vh] w-auto h-auto">
        </ng-template>
    </p-galleria>
    `,
    imports: [GalleriaModule]
})
export class ListImageComponent implements OnInit {
    onSelect = output<string>()
    images = input.required<IImage[]>()
    activeIndex: number = 0
        displayCustom: boolean = false
    ngOnInit() { }
    imageClick(index: number) {
        this.activeIndex = index
        this.displayCustom = true
    }
}