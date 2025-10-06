import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MsgRequestService {
    selectedComponent: WritableSignal<'outlet'|'list'> = signal('list')

    cancelToDefault() { this.selectedComponent.set('list')}

    switchToComponent(value: 'outlet'|'list') { 
        this.selectedComponent.set(value)
    }
}