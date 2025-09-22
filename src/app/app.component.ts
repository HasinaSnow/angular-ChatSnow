import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast'
import { ProgressBar } from 'primeng/progressbar'
import { ToastService } from './shared/services/toast.service';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmDialogModule, Toast, ProgressBar],
  template: `
    <div class="relative h-full w-full bg-surface-200 dark:bg-surface-800">
      @if(isLoading()) {
        <div class="bg-surface-950/50 absolute w-screen h-screen z-50">
          <p-progressbar  mode="indeterminate" [style]="{'height': '5px', 'position': 'aboslute'}"/>
        </div>
      }

      <router-outlet/>
    </div>
    <p-confirmdialog styleClass="max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]" />
    <p-toast
      [breakpoints]="{'920px': { width: '90vw'}}"
      [position]="toastPosition()" />
  `
})
export class AppComponent {
  private toastService = inject(ToastService)
  isLoading = inject(LoadingService).isLoading
  toastPosition = this.toastService.position
}
