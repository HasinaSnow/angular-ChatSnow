import { inject, Injectable, signal, WritableSignal } from "@angular/core";
import { AuthGateway } from "../../core/ports/auth.gateway";
import { debounceTime } from "rxjs";
import { Router } from "@angular/router";
import { ToastService } from "../services/toast.service";
import { LoadingService } from "../services/loading.service";
import { BreakpointService } from "../services/breakpoint.service";
import { UserEntity } from "../../core/entities/user.entity";

type Tsignup = {name: string, email: string, password: string}
type Tsignin = {email: string, password: string}

@Injectable({providedIn: 'root'})
export class AuthService {
    private authGateway = inject(AuthGateway)
    private router = inject(Router)
    private toastService = inject(ToastService)
    private loading = inject(LoadingService)

    conversUrl = inject(BreakpointService).isMobile() ? 'mobile/convers' : 'convers'
    userAuth: WritableSignal<UserEntity|null> = signal(null)
    accessToken: string|null = null
    refreshToken: string|null = null

    signup({name, email, password}: Tsignup) {
        this.loading.set(true)
        this.authGateway.register(name, email, password)
            .pipe(debounceTime(1000))
            .subscribe({
                error: (error) => {
                    this.loading.set(false)
                    this.toastService.show({
                        detail: error,
                        severity: 'error',
                        summary: 'Signup error'
                    }, 'top-right')
                },
                complete: () => {
                    this.router.navigateByUrl('home/login').then(() => {
                        this.loading.set(false)
                        this.toastService.show({
                            detail: 'Register successfull, please check your email, and login.',
                            severity: 'success',
                            summary: 'Signup success'
                        }, 'top-right')
                    })
                }
        })
    }

    signin({email, password}: Tsignin) {
        this.loading.set(true)
        this.authGateway.login(email, password)
            .subscribe({
                error: (error) => {
                    this.loading.set(false)
                    this.toastService.show({
                        detail: error.message,
                        severity: 'error',
                        summary: 'Signin error'
                    }, 'top-right')
                },
                next: (response) => {
                    this.accessToken = response.accessToken
                    this.refreshToken = response.refreshToken
                    this.userAuth.set(response.user)
                    this.router.navigateByUrl(this.conversUrl).then(() => {
                        this.loading.set(false)
                        this.toastService.show({
                            detail: 'Welome, you are connected.',
                            severity: 'success',
                            summary: 'Login success'
                        }, 'top-right')
                    })
                }
            })
    }

    signOut() {
        this.loading.set(true)
        this.userAuth.set(null)
        this.router.navigateByUrl('home/login').then(() => {
            this.loading.set(false)
            this.toastService.show({
                detail: 'Thank you, you are disconnected.',
                severity: 'info',
                summary: 'Logout'
            }, 'top-right')
        })
    }

    isLogin() {
        return this.userAuth() !== null
    }
}