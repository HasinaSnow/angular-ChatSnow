import { inject, Injectable, signal, WritableSignal } from '@angular/core'
import { MessageService, ToastMessageOptions } from 'primeng/api'
import { ToastPositionType } from 'primeng/toast'

@Injectable({providedIn: 'root'})
export class ToastService {
    private msgService = inject(MessageService)
    position: WritableSignal<ToastPositionType> = signal('top-center')

    show(options?: Partial<ToastMessageOptions>, position: ToastPositionType = 'top-center') {
        this.position.set(position)
        console.log('show toast')
        this.msgService.add({
            severity: 'info',
            summary: 'test',
            detail: 'test of toast',
            life: 3000,
            ...options
        })
    }
}