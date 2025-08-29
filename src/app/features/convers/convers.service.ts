import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConversService {
    idConversSelected: WritableSignal<string|null> = signal(null)
    selectedComponent: WritableSignal<'msg'|'info'> = signal('msg')

    swicthToComponent(value: 'msg'|'info'|undefined) {
        value
            ? this.selectedComponent.set(value)
            : this.selectedComponent.update(value => value === 'info' ? 'msg' : 'info')
    }
}