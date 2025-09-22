import { Confirmation } from "primeng/api"
import { BreakpointService } from "../services/breakpoint.service"

export const LogoutConfirm = ($event: any, bpService: BreakpointService): Confirmation => {
    return {
        target: $event.target as EventTarget,
        message: 'Etes-vous sûre de vouloir se déconnecter ?',
        header: 'Log out ?',
        closable: !bpService.isMobile,
        closeOnEscape: true,
        icon: 'pi pi-exclamation-triangle',
        rejectVisible: bpService.isMobile(),
        rejectButtonProps: {
            label: 'cancel',
            severity: 'secondary',
            outlined: true
        },
        acceptButtonProps: {
            label: 'Log out',
            severity: 'primary'
        },
        acceptIcon: 'pi pi-sign-out',
    }
}