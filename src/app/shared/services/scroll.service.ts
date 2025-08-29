import { ElementRef, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ScrollService {
    scrollToBottom(element: ElementRef<HTMLElement>) {
        element.nativeElement.scrollTop = element.nativeElement.scrollHeight
    }
}