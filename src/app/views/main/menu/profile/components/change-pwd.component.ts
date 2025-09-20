import { Component, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import { InputText } from 'primeng/inputtext';

@Component({
    selector: 'app-change-pwd',
    imports: [Button, InputText, FormsModule],
    template: `
        <div class="flex flex-col gap-2">
            <div class="w-full">
                <label for="email" class="flex items-center font-semibold gap-1">
                    <i class="pi pi-lock" style="font-size: .9rem;"></i>
                    Current password
                </label>
                <input id="password" placeholder="your current password" class="w-full my-2" pInputText />
                <small class="w-full text-red-500 block text-end" id="email-help">invalid password.</small>
            </div>
            <div class="w-full">
                <label for="email" class="flex items-center font-semibold gap-1">
                    <i class="pi pi-lock" style="font-size: .9rem;"></i>
                    New password
                </label>
                <input id="password" placeholder="your new password" class="w-full my-2" pInputText />
                <small class="w-full text-red-500 block text-end" id="email-help">invalid password.</small>
            </div>
            <div class="w-full">
                <label for="email" class="flex items-center font-semibold gap-1">
                    <i class="pi pi-lock" style="font-size: .9rem;"></i>
                    Confirmation
                </label>
                <input id="password" placeholder="confirm your new password" class="w-full my-2" pInputText />
                <small class="w-full text-red-500 block text-end" id="email-help">invalid password.</small>
            </div>
            <p class="w-full text-muted-color max-md:text-sm">
                Pour changer de mot de passe, vous devez mentionner l'ancien mot de passe.
            </p>
            <div class="flex gap-2">
                @if(cancelBtnVisible()) {
                    <p-button (onClick)="onSave()(false)" label="Cancel" severity="secondary" outlined="true" styleClass="m-0"/>
                }
                <p-button (onClick)="onSave()(true)" label="change password" icon="pi pi-check"/>
            </div>
        </div>
    `,
})

export class ChangePasswordComponent implements OnInit {
    id = input.required<string>()
    onSave = input.required<(value: boolean) => void>()
    cancelBtnVisible = input<boolean>()

    ngOnInit() { }

}