import { Component, inject, model, OnInit, signal } from '@angular/core';
import { ISelectMenuBarOptions, SelectMenubarComponent } from "./select-menubar.component";
import { ItemFileComponent } from "./item-file.component";
import { ItemLinkComponent } from "./item-link.component";
import { Button } from "primeng/button";
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IImage, ListImageComponent } from './list-image.component';

@Component({
    selector: 'app-list-media',
    template: `
    <div class="py-2 pl-3 text-color h-full w-full flex flex-col gap-3 overflow-auto">
        <!-- header -->
        <div class="flex items-center gap-3">
            <p-button (onClick)="cancel()" icon="pi pi-arrow-left text-muted-color" rounded="true" size="large" variant="text" severity="secondary" />
            <h2 class="text-2xl leading-none font-semibold">Medias, Files and Links</h2>
        </div>

        <div class="w-full flex lg:justify-center overflow-x-auto">
            <app-select-menubar [options]="stateOptions" [(selectedOption)]="selected"/>
        </div>
        @if(this.selected() === 'images') {
            <div class="flex-1 flex gap-2 p-2 overflow-auto">
                <app-list-image [images]="images()"/>
            </div>
        } @else if(this.selected() == 'files') {
            <div class="flex-1 py-2 px-4 flex gap-2 items-center flex-col overflow-auto">
                <app-item-file class="w-full" [filename]="'file name.pdf'"/>
                <app-item-file class="w-full" [filename]="'file name2.docx'"/>
                <app-item-file class="w-full" [filename]="'file name3.pdf'"/>
                <app-item-file class="w-full" [filename]="'file name4.rar'"/>
            </div>
        } @else {
            <div class="flex-1 py-2 px-4 flex gap-2 items-center flex-col overflow-auto">
                <app-item-link class="w-full" [link]="'https://hasina@snow.com'"/>
                <app-item-link class="w-full" [link]="'https://hasina@snow.com'"/>
                <app-item-link class="w-full" [link]="'https://hasina@snow.com'"/>
            </div>
        }
    </div>
    `,
    imports: [SelectMenubarComponent, CommonModule, ItemFileComponent, ItemLinkComponent, Button, ListImageComponent]
})
export class ListMediaComponent implements OnInit {

    private location = inject(Location)
    images = signal<IImage[]>([])

    stateOptions: ISelectMenuBarOptions[] = [
        { icon: 'pi pi-images', label: 'Images', value: 'images'},
        { icon: 'pi pi-files', label: 'Files', value: 'files' },
        { icon: 'pi pi-link', value: 'links' }
    ];
    selected = signal('images');

    ngOnInit() {
        this.images.set([
            {
                src: './images/apparel1.jpg',
                thumbnailSrc: './images/pdp1.jpg',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/menu_bg4.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            },
            {
                src: './images/pdp1.jpg',
                thumbnailSrc: '',
                alt: 'Descritpion for image',
                title: 'title image'
            }
        ])
    }

    cancel() { this.location.back() }

    selectComponent() {
        throw new Error('Method not implemented.');
    }
}