import { Component, inject, signal, WritableSignal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Avatar } from "primeng/avatar";
import { InputText } from "primeng/inputtext";
import { Checkbox } from "primeng/checkbox";
import { Button } from "primeng/button";
import { Router } from "@angular/router";
import { FloatLabel } from "primeng/floatlabel";

@Component({
    selector: 'app-login',
    imports: [Avatar, InputText, FormsModule, FloatLabel, Checkbox, Button],
    template: `
        <div class="flex flex-col gap-3 items-center rounded-md shadow-lg text-color bg-surface-0 p-4 h-full w-full sm:w-[400px]">
            <!-- logo -->
            <div class="pt-3 flex flex-col items-center gap-2">
                <p-avatar image="./images/pdp1.jpg" size="xlarge" shape="circle"/>
                <p class="font-bold text-xl">Log in to your account</p>
                <p class="text-md">Please enter your details.</p>
            </div>

            <div class="w-full max-w-[420px] flex flex-col gap-2 p-2">
                <!-- email -->
                <div class="">
                    <p-floatlabel  variant="on">
                        <label for="email" class="flex items-center gap-1 font-light">
                            <i class="pi pi-at" style="font-size: .9rem;"></i>
                            Email address
                        </label>
                        <input id="email" class="w-full" pInputText />
                    </p-floatlabel>
                    <small class="w-full text-red-500 block text-end" id="email-help">invalid email.</small>
                </div>
                <!-- password -->
                <div class="">
                    <p-floatlabel variant="on">
                        <label for="pwd" class="flex items-center gap-1 font-light">
                            <i class="pi pi-lock" style="font-size: .9rem;"></i>
                            Password
                        </label>
                        <input id="pwd" type="password" class="w-full" pInputText />
                    </p-floatlabel>
                    <small class="w-full text-red-500 block text-end" id="email-help">invalid password.</small>
                </div>

                <!-- remember & forgot -->
                <div class="flex justify-between items-center py-3">
                    <div class="flex items-center gap-1.5">
                        <p-checkbox id="remember" [(ngModel)]="checked" />
                        <label class="leading-none cursor-pointer hover:text-primary duration-200" for="remember">Remember me</label>
                    </div>
                    <span (click)="goToForgot()" class="underline cursor-pointer">Forgot password</span>
                </div>

                <!-- buttons -->
                <div class="flex gap-2 sm:p-2 py-4 w-full">
                    <p-button label="Log in" styleClass="m-0 w-full" class="flex-1"></p-button>
                    <p-button label="reset" variant="outlined" outlined="true" severity="secondary" styleClass="m-0 w-full" class="flex-1"></p-button>
                </div>
            </div>


            <!-- go to register -->
            <p class="p-2">
                Don't have an account? <span (click)="goToRegister()" class="text-primary font-semibold hover:underline cursor-pointer">Register</span>
            </p>

        </div>
    `
})
export class LoginComponent {
    private router = inject(Router)
    checked: WritableSignal<boolean> = signal(true)

    goToRegister() { this.router.navigateByUrl('home/register')}
    goToForgot() {this.router.navigateByUrl('home/forgot-password')}
}