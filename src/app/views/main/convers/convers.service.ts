import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConversService {
    idConversSelected: WritableSignal<string|null> = signal(null)
    selectedComponent: WritableSignal<'msg'|'info'> = signal('msg')
    selectedConversView: WritableSignal<'new'|'list'> = signal('list')

    cancelToDefault() { this.selectedComponent.set('msg')}

    switchToComponent(value: 'msg'|'info') {
        this.selectedComponent.set(value)
    }

    switchToConversView(value: 'new'|'list') {
        this.selectedConversView.set(value)
    }
}