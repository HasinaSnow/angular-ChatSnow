import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config'
import { routes } from './app.routes';
import { primengConfig } from './primeng.config'
import { BreakpointService } from './shared/services/breakpoint.service';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    BreakpointService,
    ConfirmationService,
    DialogService,
    provideAnimationsAsync(),
    providePrimeNG(primengConfig)
  ]
};
