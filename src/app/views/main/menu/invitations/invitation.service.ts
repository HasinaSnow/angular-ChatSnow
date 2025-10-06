import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class InvitationService {
    selectedComponent: WritableSignal<'outlet'|'list'> = signal('list')

    cancelToDefault() { this.selectedComponent.set('list')}

    switchToComponent(value: 'outlet'|'list'|undefined) { 
        value
            ? this.selectedComponent.set(value)
            : this.selectedComponent.update(value => value === 'list' ? 'outlet' : 'list')
    }
}