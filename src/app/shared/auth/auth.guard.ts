import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const router = inject(Router);
    const authService = inject(AuthService)

    if(authService.isLogin()()) {
        console.log('user authenticated', authService.isLogin()())
        return true;
    }
    console.log('user not login, please login')
    router.navigateByUrl('home/login')
    return false
};