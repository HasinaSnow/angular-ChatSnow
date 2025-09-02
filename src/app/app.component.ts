import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfirmDialogModule],
  template: `
  <div class="h-full w-full bg-surface-200 dark:bg-surface-800">
    <router-outlet/>
  </div>
  <p-confirmdialog styleClass="max-w-[95vw] md:max-w-[75vw] lg:max-w-[60vw]" />
  `
})
export class AppComponent {}
