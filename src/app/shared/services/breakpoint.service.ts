import { Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
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
    readonly screenWidth = toSignal(fromEvent(window, 'resize').pipe(
        debounceTime(200),
        map((event: Event) => (event?.target as Window).innerWidth),
        startWith(window.innerWidth)
    )) as Signal<number>

    readonly breakpooint: {xs: number, sm: number, md: number, lg: number, xl: number} = {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
    }
}