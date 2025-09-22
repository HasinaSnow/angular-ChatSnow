import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast'
import { ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmDialogModule, Toast],
  template: `
    <div class="h-full w-full bg-surface-200 dark:bg-surface-800">
      <router-outlet/>
    </div>
    <p-confirmdialog styleClass="max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]" />
    <p-toast [position]="toastPosition()" />
  `
})
export class AppComponent {
  private toastService = inject(ToastService)
  toastPosition = this.toastService.position
}
