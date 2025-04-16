import { effect, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
    isDark: WritableSignal<boolean> = signal(false)
    onEffect = effect(() => {
        const isDark = this.isDark()
        const element = document.querySelector('html')
        isDark ? element?.classList.remove('dark') : element?.classList.add('dark')
    })

    toggleTheme() {
        const element = document.querySelector('html')
        const isDark = element?.classList.contains('dark')
        isDark ? element?.classList.remove('dark') : element?.classList.add('dark')
    }
}