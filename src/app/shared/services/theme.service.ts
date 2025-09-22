import { computed, effect, Injectable, Signal, signal, WritableSignal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
    isDark: WritableSignal<boolean> = signal(false)
    darkThemeInfo: Signal<string> = computed(() => this.isDark() ? 'Enabled': 'Disabled')

    onEffect = effect(() => {
        const isDark = this.isDark()
        console.log('is dark', this.isDark())
        const element = document.querySelector('html')
        isDark ? element?.classList.add('dark') : element?.classList.remove('dark')
    })
}