import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login.component";
import { RegisterComponent } from "./components/register.component";
import { ForgotComponent } from "./components/forgot.component";

export const HomeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotComponent
    }
]