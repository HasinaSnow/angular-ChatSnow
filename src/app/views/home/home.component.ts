import { Component, inject } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { Avatar } from "primeng/avatar";
import { Button } from "primeng/button";
import { ToastService } from "../../shared/services/toast.service";

@Component({
    selector: 'app-home',
    imports: [RouterOutlet, RouterLink, Avatar, Button],
    template: `
        <div class="text-color sm:flex items-center justify-center h-full w-full sm:p-3 lg:p-4 xl:p-6">
            <div class="fixed top-0 w-full sm:flex justify-between items-center py-4 hidden sm:px-3 md:px-5 lg:px-6">
                <div class="flex gap-2 items-center font-bold">
                    <p-avatar image="./images/pdp1.jpg" size="large" shape="circle"/> 
                    <span class="text-xl">ChatSnow</span>
                </div>

                <div class="flex gap-2">
                    <p-button routerLink="login" routerLinkActive="router-link-active"  label="Login" styleClass="m-0 shadow-lg"/>
                    <p-button routerLink="register" label="Register" variant="text" outlined="true" styleClass="m-0"/>
                </div>
            </div>
            <router-outlet></router-outlet>
        </div>
    `
})
export class HomeComponent {
    private toastService = inject(ToastService)
}