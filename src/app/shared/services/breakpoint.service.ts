import { computed, effect, inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { Router } from '@angular/router';
import { debounceTime, fromEvent, map, startWith } from 'rxjs';

export type Tbreakpoint = 'xs'|'sm'|'md'|'lg'|'xl'
export enum EBreakpoint {
    xs = 0,
    sm = 640,
    md = 768,
    lg = 1024,
    xl = 1280
}

@Injectable({providedIn: 'root'})
export class BreakpointService {

    private router = inject(Router)
    screenEffect = effect(() => {
        const screen = this.screenWidth()
        this.checkUrl(screen)
    })

    checkUrl(screen: number) {
        const isMobile = screen <= this.breakpoint.md
        const url = this.router.url
            if(!isMobile && url.startsWith('/mobile')) {
                // this.router.navigateByUrl(url.replace('/mobile', ''), {replaceUrl: true})
                this.router.navigate(['convers'])
            } else if(isMobile && !url.startsWith('/mobile')) {
                // this.router.navigateByUrl('/mobile' + url, {replaceUrl: true})
                this.router.navigate(['mobile/convers'])
            }
    }

    readonly screenWidth = toSignal(fromEvent(window, 'resize').pipe(
        debounceTime(200),
        map((event: Event) => {
            const screen = (event?.target as Window).innerWidth
            this.checkUrl(screen)
            return screen
        }),
        startWith(window.innerWidth)
    )) as Signal<number>

    readonly breakpoint: {xs: number, sm: number, md: number, lg: number, xl: number} = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    }

    readonly isMobile = computed(() => this.screenWidth() <= this.breakpoint.md)
}