import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Avatar } from "primeng/avatar";
import { InputText } from "primeng/inputtext";
import { Button } from "primeng/button";
import { FloatLabel } from "primeng/floatlabel";
import { Router } from "@angular/router";

@Component({
    selector: 'app-forgot',
    imports: [Avatar, InputText, FormsModule, FloatLabel, Button],
    template: `
        <div class="flex flex-col gap-3 items-center rounded-md shadow-lg text-color bg-surface-0 p-4 h-full w-full sm:w-[400px]">
            <!-- logo -->
            <div class="pt-3 flex flex-col items-center gap-2">
                <p-avatar image="./images/pdp1.jpg" size="xlarge" shape="circle"/>
                <p class="font-bold text-xl">Forgot your password?</p>
                <p class="text-md text-center mx-3">Please enter the email address associated with your account.</p>
            </div>

            <div class="w-full max-w-[420px] flex flex-col gap-2 p-2">
                <!-- email -->
                <div class="">
                    <p-floatlabel  variant="on">
                        <label for="email" class="flex items-center gap-1 font-light">
                            Your Email address
                        </label>
                        <input id="email" class="w-full" pInputText />
                    </p-floatlabel>
                    <small class="w-full text-red-500 block text-end" id="email-help">invalid email.</small>
                </div>

                <!-- buttons -->
                <div class="flex gap-2 sm:p-2 py-4 w-full">
                    <p-button label="Send request" styleClass="m-0 w-full" class="flex-1"></p-button>
                    <p-button (onClick)="goToLogin()" label="Cancel" variant="outlined" outlined="true" severity="secondary" styleClass="m-0 w-full" class="flex-1"></p-button>
                </div>
            </div>

        </div>
    `
})
export class ForgotComponent {
    private router = inject(Router)
    goToLogin() { this.router.navigateByUrl('/home/login')}
}