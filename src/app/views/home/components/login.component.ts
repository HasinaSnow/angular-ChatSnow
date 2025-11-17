import { Component, inject, signal, WritableSignal } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Avatar } from "primeng/avatar";
import { InputText } from "primeng/inputtext";
import { Checkbox } from "primeng/checkbox";
import { Button } from "primeng/button";
import { Router } from "@angular/router";
import { FloatLabel } from "primeng/floatlabel";
import { AuthService } from "../../../shared/auth/auth.service";
import { BreakpointService } from "../../../shared/services/breakpoint.service";

@Component({
    selector: 'app-login',
    imports: [ReactiveFormsModule, Avatar, InputText, FormsModule, FloatLabel, Checkbox, Button],
    template: `
        <div class="flex flex-col gap-3 items-center rounded-md shadow-lg text-color bg-surface-0 dark:bg-surface-950 p-4 h-full w-full sm:w-[400px]">
            <!-- logo -->
            <div class="pt-3 flex flex-col items-center gap-2">
                <p-avatar image="./images/logo-chatsnow.png" size="xlarge" shape="circle"/>
                <p class="font-bold text-xl">Log in to your account</p>
                <p class="text-md">Please enter your details.</p>
            </div>

            <form [formGroup]="loginForm" class="w-full max-w-[420px] flex flex-col gap-2 p-2">
                <!-- email -->
                <div class="">
                    <p-floatlabel  variant="on">
                        <label for="email" class="flex items-center gap-1 font-light">
                            <i class="pi pi-at" style="font-size: .9rem;"></i>
                            Email address
                        </label>
                        <input formControlName="email" id="email" class="w-full" pInputText />
                    </p-floatlabel>
                    <small class="w-full h-7 text-red-500 block text-end" id="email-help">
                        @if(emailControl.invalid && (emailControl.dirty || emailControl.touched)) {
                            @if(emailControl.hasError('required')) { email required }
                            @if(emailControl.hasError('email')) { invalid email }
                        }
                    </small>
                </div>
                <!-- password -->
                <div class="">
                    <p-floatlabel variant="on">
                        <label for="pwd" class="flex items-center gap-1 font-light">
                            <i class="pi pi-lock" style="font-size: .9rem;"></i>
                            Password
                        </label>
                        <input formControlName="password" id="pwd" type="password" class="w-full" pInputText minlength="4" />
                    </p-floatlabel>
                    <small class="w-full h-7 text-red-500 block text-end" id="email-help">
                    @if(pwdControl.invalid && (pwdControl.dirty || pwdControl.touched)) {
                            @if(pwdControl.hasError('required')) { password required. }
                            @if(pwdControl.hasError('minlength')) { minimum length is 4. }
                    }
                    </small>
                </div>

                <!-- remember & forgot -->
                <div class="flex justify-between items-center py-3">
                    <div class="flex items-center gap-1.5">
                        <p-checkbox id="remember" />
                        <label class="leading-none cursor-pointer hover:text-primary duration-200" for="remember">Remember me</label>
                    </div>
                    <span (click)="goToForgot()" class="underline cursor-pointer">Forgot password</span>
                </div>

                <!-- buttons -->
                <div class="flex gap-2 sm:p-2 py-4 w-full">
                    <p-button (onClick)="onSubmit()" label="Sign in" styleClass="w-full" class="flex-1"></p-button>
                    <p-button (onClick)="onReset()" label="reset" variant="outlined" outlined="true" severity="secondary" styleClass="w-full" class="flex-1"></p-button>
                </div>
            </form>


            <!-- go to register -->
            <p class="p-2">
                Don't have an account? <span (click)="goToRegister()" class="text-primary font-semibold hover:underline cursor-pointer">Sign up</span>
            </p>

        </div>
    `
})
export class LoginComponent {
    private router = inject(Router)
    private authService = inject(AuthService)
    private bp = inject(BreakpointService)

    checked: WritableSignal<boolean> = signal(true)
    readonly loginForm = new FormGroup({
        email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
        password: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.minLength(4)]})
    })

    get emailControl() { return this.loginForm.controls.email }
    get pwdControl() { return this.loginForm.controls.password }

    goToRegister() { 
        this.router.navigateByUrl(this.bp.isMobile() ? 'mobile/home/register': 'home/register')
    }
    goToForgot() {this.router.navigateByUrl(this.bp.isMobile() ? 'mobile/home/forgot-password' : 'home/forgot-password')}

    onSubmit() {
        this.loginForm.markAllAsTouched()
        if(!this.loginForm.invalid)
            this.authService.signin(this.loginForm.getRawValue())
    }

    onReset() {
        this.loginForm.reset()
    }

}