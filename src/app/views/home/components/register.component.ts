import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Avatar } from "primeng/avatar";
import { Button } from "primeng/button";
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { AuthService } from "../../../shared/auth/auth.service";

@Component({
    selector: 'app-register',
    imports: [ReactiveFormsModule, Avatar, InputText, FormsModule, Button, FloatLabel],
        template: `
            <div class="flex flex-col gap-3 items-center rounded shadow-lg text-color bg-surface-0 dark:bg-surface-950 p-4 h-full w-full sm:w-[400px]">
                <!-- logo -->
                <div class="pt-3 flex flex-col items-center gap-2">
                    <p-avatar image="./images/pdp1.jpg" size="xlarge" shape="circle"/>
                    <p class="font-bold text-xl">Create your account</p>
                    <p class="text-md">Please enter your details to register.</p>
                </div>

                <form [formGroup]="registerForm" class="w-full max-w-[420px] flex flex-col gap-1 p-2">
                    <!-- pseudo -->
                    <div class="">
                        <p-floatlabel  variant="on">
                            <label for="pseudo" class="flex items-center gap-1 font-light">
                                <i class="pi pi-user" style="font-size: .9rem;"></i>
                                Pseudo
                            </label>
                            <input formControlName="name" id="pseudo" class="w-full" pInputText minlength="3" maxlength="20" />
                        </p-floatlabel>
                        <small class="w-full h-7 text-red-500 block text-end" id="pseudo-help">
                            @if(nameControl.invalid && (nameControl.dirty || nameControl.touched)) {
                                @if(nameControl.hasError('required')) { email required }
                                @if(nameControl.hasError('minlength')) { minimum length is 3 }
                                @if(nameControl.hasError('maxlength')) { maximum length is 20 }
                            }
                        </small>
                    </div>

                    <!-- email -->
                    <div class="">
                        <p-floatlabel variant="on">
                            <label for="email" class="flex items-center gap-1 font-light">
                                <i class="pi pi-at" style="font-size: .9rem;"></i>
                                Email address
                            </label>
                            <input formControlName="email" id="email" type="text" class="w-full" pInputText autocomplete="false" />
                        </p-floatlabel>
                        <small class="w-full h-7 text-red-500 block text-end" id="email-help">
                            @if(emailControl.invalid && (emailControl.dirty || emailControl.touched)) {
                                @if(emailControl.hasError('required')) { email required }
                                @if(emailControl.hasError('email')) { invalid email }
                            }
                        </small>
                    </div>

                    <!-- password -->
                    <div class="w-full">
                        <p-floatlabel variant="on">
                            <label for="pwd" class="flex items-center gap-1 font-light">
                                <i class="pi pi-lock" style="font-size: .9rem;"></i>
                                Password
                            </label>
                            <input formControlName="password" id="pwd" type="password" class="w-full" pInputText minlength="4" />
                        </p-floatlabel>
                        <small class="w-full h-7 text-red-500 block text-end" id="pwd-help">
                            @if(pwdControl.invalid && (pwdControl.dirty || pwdControl.touched)) {
                                @if(pwdControl.hasError('required')) { email required }
                                @if(pwdControl.hasError('minlength')) { minimum length is 4 }
                            }
                        </small>
                    </div>

                    <!-- confirmation password -->
                    <div class="w-full">
                        <p-floatlabel variant="on">
                            <label for="pwdConfirm" class="flex items-center gap-1 font-light">
                                <i class="pi pi-lock" style="font-size: .9rem;"></i>
                                Password confirmation
                            </label>
                            <input formControlName="confirm" id="pwdConfirm" type="password" class="w-full" pInputText />
                        </p-floatlabel>
                        <small class="w-full h-7 text-red-500 block text-end" id="pwd-confirm-help">
                            @if(confirmControl.invalid && (confirmControl.dirty || confirmControl.touched)) {
                                @if(confirmControl.hasError('required')) { confirmation required }
                            }
                        </small>
                    </div>

                    <!-- buttons -->
                    <div class="flex gap-2 sm:p-2 py-4 w-full">
                        <p-button (onClick)="onSubmit()" label="Register" styleClass="m-0 w-full" class="flex-1"></p-button>
                        <p-button (onClick)="onReset()" label="reset" variant="outlined" outlined="true" severity="secondary" styleClass="m-0 w-full" class="flex-1"></p-button>
                    </div>
                </form>

                <!-- go to register -->
                <p class="p-2">
                    Already have an account? <span (click)="goToLogin()" class="text-primary font-semibold hover:underline cursor-pointer">Log in</span>
                </p>
            </div>
    `
})
export class RegisterComponent {
    private router = inject(Router)
    private authService = inject(AuthService)

    readonly registerForm = new FormGroup({
        name: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)]}),
        email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
        password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(4)]}),
        confirm: new FormControl('', {nonNullable: true, validators: [Validators.required]})
    })

    get emailControl() { return this.registerForm.controls.email }
    get nameControl() { return this.registerForm.controls.name }
    get pwdControl() { return this.registerForm.controls.password }
    get confirmControl() { return this.registerForm.controls.confirm }

    onSubmit() {
        console.log('on register submit =>', this.registerForm.getRawValue())
        this.registerForm.markAllAsTouched()
        if(!this.registerForm.invalid)
            this.authService.signup(this.registerForm.getRawValue())
    }

    onReset() { this.registerForm.reset( )}

    goToLogin() { this.router.navigateByUrl('/home/login') }
}