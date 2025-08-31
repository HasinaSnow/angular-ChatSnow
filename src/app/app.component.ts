import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <div class="h-full w-full bg-surface-200 dark:bg-surface-800">
    <router-outlet/>
  </div>`
})
export class AppComponent {}
