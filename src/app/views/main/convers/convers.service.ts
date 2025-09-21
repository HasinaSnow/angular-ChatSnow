import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConversService {
    idConversSelected: WritableSignal<string|null> = signal(null)
    selectedComponent: WritableSignal<'msg'|'info'> = signal('msg')

    cancelToDefault() { this.selectedComponent.set('msg')}

    swicthToComponent(value: 'msg'|'info') {
        this.selectedComponent.set(value)
    }
}