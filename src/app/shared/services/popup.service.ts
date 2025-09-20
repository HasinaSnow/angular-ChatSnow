import { ElementRef, Injectable, Signal } from '@angular/core';
import { PopupComponent } from '../components/popup.component';

export type TPopupPosition = 'auto'
    |'top-right'|'top-left'
    |'bottom-right'|'bottom-left'
    |'left-top'|'left-bottom'
    |'right-top'|'right-bottom'

@Injectable({providedIn: 'root'})
export class PopupService {

    closePopup(viewChild: Signal<PopupComponent|undefined>) {
        viewChild()?.isVisible.set(false)
    }

    togglePopup(viewChild: Signal<PopupComponent|undefined>, $event: MouseEvent, position: TPopupPosition = 'auto') {
        const triggle = $event?.currentTarget as HTMLElement
        const rect = triggle.getBoundingClientRect()
        viewChild()?.isVisible.update(value => !value)
        // after viewchild init
        setTimeout(() => {
            let popup = viewChild()?.popupContent()?.nativeElement as HTMLElement

            if(viewChild()?.isVisible()) {
                popup.classList.remove('hidden')
                const positions = this.positionComputed(rect, popup, position)
                popup.style.top = positions.top
                popup.style.bottom = positions.bottom
                popup.style.left = positions.left
                popup.style.right = positions.right
            }
        });

    }

    private positionComputed(rect: DOMRect, popup: HTMLElement, position: TPopupPosition) {
        const popupWidth = popup.getBoundingClientRect().width
        const popupHeight = popup.getBoundingClientRect().height
        console.log('popuwidth height', popupWidth, popupHeight)
        const screenHeight = document.documentElement.clientHeight
        const screenWidth = document.documentElement.clientWidth
        let client: {top: string, bottom: string, left: string, right: string} = {
            top: 'auto',
            bottom: 'auto',
            left: 'auto',
            right: 'auto',
        }
        switch (position) {
            case 'top-right':
                client.left = `${rect.left}px`
                client.bottom =`${screenHeight - rect.top + 7}px`
                break;
            case 'top-left':
                client.right = `${screenWidth - rect.right}px`
                client.bottom =`${screenHeight - rect.top + 7}px`
                break;
            case 'bottom-right':
                client.left = `${rect.left}px`
                client.top =`${rect.bottom + 7}px`
                break;
            case 'bottom-left':
                client.right = `${screenWidth - rect.right}px`
                client.top =`${rect.bottom + 7}px`
                break;
            case 'right-top':
                client.left = `${rect.right + 7}px`
                client.bottom =`${screenHeight - rect.bottom}px`
                break;
            case 'right-bottom':
                client.left = `${rect.right + 7}px`
                client.top =`${rect.top}px`
                break;
            case 'left-top':
                client.right = `${screenWidth - rect.left + 7}px`
                client.bottom =`${screenHeight - rect.bottom}px`
                break;
            case 'left-bottom':
                client.right = `${screenWidth - rect.left + 7}px`
                client.top =`${rect.top}px`
                break;

            default: // auto
                // top
                if(rect.top > popupHeight)
                    client.bottom =`${screenHeight - rect.bottom}px`
                // bottom
                else client.top =`${rect.top}px`

                // left
                if(rect.left > (popupWidth/2 +7) - rect.width/2)
                    client.right = `${screenWidth - rect.left + 7}px`

                // right
                else if(screenWidth - rect.right > (popupWidth/2 + 7) - rect.width/2)
                    client.left = `${rect.right + 7}px`

                // center
                else client.left = `${rect.left - (popupWidth/2 + 7 - rect.width/2)}px`

                break;
        }

        return client
    }
}