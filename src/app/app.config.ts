import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config'
import { routes } from './app.routes';
import { primengConfig } from './primeng.config'
import { BreakpointService } from './shared/services/breakpoint.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { InMemoryProviders } from './core/providers/in-memory.providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    BreakpointService,
    ConfirmationService,
    DialogService,
    MessageService,
    provideAnimationsAsync(),
    providePrimeNG(primengConfig),
    ...InMemoryProviders
  ]
};
