import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ConversService {
    idConversSelected: WritableSignal<string|null> = signal(null)
    selectedComponent: WritableSignal<'msg'|'list'|'info'> = signal('list')

    cancelToConversList() {
        this.selectedComponent.set('list')
    }

    getOneConvers() {}
    getConversList() {}
    
}