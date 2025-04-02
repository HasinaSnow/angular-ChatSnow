import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
    toggleThem() {
        const element = document.querySelector('html')
        const isDark = element?.classList.contains('dark')
        isDark ? element?.classList.remove('dark') : element?.classList.add('dark')
    }
}