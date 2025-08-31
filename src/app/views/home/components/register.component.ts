import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Avatar } from "primeng/avatar";
import { Button } from "primeng/button";
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";

@Component({
    selector: 'app-register',
    imports: [Avatar, InputText, FormsModule, Button, FloatLabel],
        template: `
            <div class="flex flex-col gap-3 items-center rounded shadow-lg text-color bg-surface-0 p-4 h-full w-full sm:w-[400px]">
                <!-- logo -->
                <div class="pt-3 flex flex-col items-center gap-2">
                    <p-avatar image="./images/pdp1.jpg" size="xlarge" shape="circle"/>
                    <p class="font-bold text-xl">Create your account</p>
                    <p class="text-md">Please enter your details to register.</p>
                </div>

                <div class="w-full max-w-[420px] flex flex-col gap-1 p-2">
                    <!-- pseudo -->
                    <div class="">
                        <p-floatlabel  variant="on">
                            <label for="pseudo" class="flex items-center gap-1 font-light">
                                <i class="pi pi-user" style="font-size: .9rem;"></i>
                                Pseudo
                            </label>
                            <input id="pseudo" class="w-full" pInputText />
                        </p-floatlabel>
                        <small class="w-full text-red-500 block text-end" id="pseudo-help">invalid pseudo.</small>
                    </div>

                    <!-- email -->
                    <div class="">
                        <p-floatlabel variant="on">
                            <label for="email" class="flex items-center gap-1 font-light">
                                <i class="pi pi-at" style="font-size: .9rem;"></i>
                                Email address
                            </label>
                            <input id="email" type="text" class="w-full" pInputText autocomplete="false" />
                        </p-floatlabel>
                        <small class="w-full text-red-500 block text-end" id="email-help">invalid email.</small>
                    </div>

                    <!-- password -->
                    <div class="w-full">
                        <p-floatlabel variant="on">
                            <label for="pwd" class="flex items-center gap-1 font-light">
                                <i class="pi pi-lock" style="font-size: .9rem;"></i>
                                Password
                            </label>
                            <input id="pwd" type="password" class="w-full" pInputText />
                        </p-floatlabel>
                        <small class="w-full text-red-500 block text-end" id="pwd-help">invalid password.</small>
                    </div>

                    <!-- confirmation password -->
                    <div class="w-full">
                        <p-floatlabel variant="on">
                            <label for="pwd" class="flex items-center gap-1 font-light">
                                <i class="pi pi-lock" style="font-size: .9rem;"></i>
                                Password confirmation
                            </label>
                            <input id="pwd" type="password" class="w-full" pInputText />
                        </p-floatlabel>
                        <small class="w-full text-red-500 block text-end" id="pwd-confirm-help">invalid password.</small>
                    </div>

                    <!-- buttons -->
                    <div class="flex gap-2 sm:p-2 py-4 w-full">
                        <p-button label="Log in" styleClass="m-0 w-full" class="flex-1"></p-button>
                        <p-button label="reset" variant="outlined" outlined="true" severity="secondary" styleClass="m-0 w-full" class="flex-1"></p-button>
                    </div>
                </div>

                <!-- go to register -->
                <p class="p-2">
                    Already have an account? <span (click)="goToLogin()" class="text-primary font-semibold hover:underline cursor-pointer">Log in</span>
                </p>
            </div>
    `
})
export class RegisterComponent {
    private router = inject(Router)
    goToLogin() { this.router.navigateByUrl('/home/login') }
}