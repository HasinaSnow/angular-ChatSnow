import { inject, Injectable, signal, WritableSignal } from '@angular/core'
import { MessageService, ToastMessageOptions } from 'primeng/api'
import { ToastPositionType } from 'primeng/toast'
import { BreakpointService } from './breakpoint.service'

@Injectable({providedIn: 'root'})
export class ToastService {
    private msgService = inject(MessageService)
    private bpService = inject(BreakpointService)

    position: WritableSignal<ToastPositionType> = signal('top-center')

    show(options?: Partial<ToastMessageOptions>, position: ToastPositionType = 'top-center') {
        if(this.bpService.isMobile()) position = 'top-center'
        this.position.set(position)

        this.msgService.add({
            severity: 'info',
            summary: 'test',
            detail: 'test of toast',
            life: 3000,
            ...options
        })
    }
}