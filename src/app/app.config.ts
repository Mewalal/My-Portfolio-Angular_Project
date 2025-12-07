import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router'; // ✅ Correct import

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({ // ✅ Scroll Fix
        scrollPositionRestoration: 'enabled', 
        anchorScrolling: 'enabled' 
      })
    ),
    provideClientHydration()
  ]
};
