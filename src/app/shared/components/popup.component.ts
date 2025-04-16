import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, model, signal, viewChild, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-popup',
    imports: [CommonModule],
    template: `
    @if(isVisible()) {
        <div #popupContent class="fixed hidden z-50">
            <ng-content select="[popupContent]"></ng-content>
        </div>
    }
    `
})
export class PopupComponent implements AfterViewInit {
    popupContent = viewChild<ElementRef<HTMLElement>>('popupContent')
    isVisible = model<boolean>()
    contentSize: WritableSignal<{width: number|undefined, height: number|undefined}> = signal({width: undefined, height: undefined})

    ngAfterViewInit() {
        const size = this.getContentSize()
        this.contentSize.set({width: size.width, height: size.height})
    }

    getContentSize() {
        const content = this.popupContent()?.nativeElement
        const width = content?.getBoundingClientRect().width
        const height = content?.getBoundingClientRect().height
        return {width, height}
    }

    @HostListener('document:click', ['$event'])
    handleDocumentClick(event: MouseEvent) {
        if(this.popupContent() && !this.popupContent()?.nativeElement.contains(event.target as Node))
            this.closePopup()
    }

    private closePopup() {
        this.isVisible.set(false)
    }
}