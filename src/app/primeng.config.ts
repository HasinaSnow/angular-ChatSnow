import { PrimeNGConfigType } from 'primeng/config';
import Aura from '@primeng/themes/aura'
import { definePreset, palette } from '@primeng/themes';

const presetTheme = definePreset(Aura, {
    semantic: {
        primary: palette('{pink}'),
        colorScheme: {
            light: {
                surface: palette('{slate}'),
            },
            dark: {
                surface: palette('{neutral}'),
            }
        },
    },
});

export const primengConfig: PrimeNGConfigType = {
    theme: {
        preset: presetTheme,
        options: {
            darkModeSelector: '.dark',
            // cssLayer: {
            //     name: 'primeng',
            //     order: 'theme, base, primeng'
            // }
        }
    }
}