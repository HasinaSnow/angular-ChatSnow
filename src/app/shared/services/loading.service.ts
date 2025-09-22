import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LoadingService {
    isLoading = signal(false)

    set(value: boolean) { this.isLoading.set(value) }
    switch() { this.isLoading.update(value => !value)}
}