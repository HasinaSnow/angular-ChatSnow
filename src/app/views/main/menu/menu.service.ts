import { Injectable, signal, WritableSignal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class MenuService {
    selectedComponent: WritableSignal<'menu-list'|'details'> = signal('menu-list')

    switchComponent(value: 'details'|'menu-list'|undefined = undefined) {
        (value)
            ? this.selectedComponent.set(value)
            : this.selectedComponent.update(value => value == 'details' ? 'menu-list' : 'details')
    }

}