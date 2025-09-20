import { Component, input, OnInit } from '@angular/core';
import { Button } from "primeng/button";
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-profile-name-edit',
    imports: [Button, InputText, FormsModule],
    template: `
        <div class="flex flex-col gap-2">
            <div class="w-full">
                <label for="email" class="flex items-center font-semibold gap-1">
                    <i class="pi pi-person-edit" style="font-size: .9rem;"></i>
                    New profile name
                </label>
                <input id="text" placeholder="Edit name : {{name()}}" class="w-full my-2" pInputText />
                <small class="w-full text-red-500 block text-end" id="email-help">invalid email.</small>
            </div>
            <p class="w-full text-muted-color max-md:text-sm">
                La modification de votre nom de profil entraînera celle de l'URL de votre profile.
            </p>
            <div class="flex gap-2">
                @if(cancelBtnVisible()) {
                    <p-button (onClick)="onSave()(false)" label="Cancel" severity="secondary" outlined="true" styleClass="m-0"/>
                }
                <p-button (onClick)="onSave()(true, 'New name')" label="Save" icon="pi pi-check"/>
            </div>
        </div>
    `
})
export class ProfileNameEditComponent implements OnInit {
    name = input.required<string>()
    cancelBtnVisible = input<boolean>()
    onSave = input.required<(isEdit: boolean, newName?: string) => void>()
    ngOnInit() { }
}