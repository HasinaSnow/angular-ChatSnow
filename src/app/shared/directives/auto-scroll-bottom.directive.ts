import { AfterViewChecked, Directive, ElementRef, inject } from "@angular/core";

@Directive({
    selector: '[autoScrollBottom]'
})
export class AutoScrollBottomDirective implements AfterViewChecked {
    scrollHeight: number = 0
    el = inject(ElementRef<HTMLDivElement>)

    ngAfterViewChecked(): void {
        this.scrollToBottom()
    }

    scrollToBottom() {
        const element = this.el.nativeElement
        if(this.scrollHeight !== element.scrollHeight) {
            element.scroll({
                top: element.scrollHeight,
                behavior: 'smooth'
            })
            this.scrollHeight = element.scrollHeight
        }
    }

}