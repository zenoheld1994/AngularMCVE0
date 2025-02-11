import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getApps } from 'firebase/app';
import { environment } from './environment';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes),
              provideHttpClient(),
              { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
              provideFirebaseApp(() => appInitializer()),
              provideAuth(() => getAuth()),
              provideFirestore(() => getFirestore()),
            ]
};

function appInitializer() {
  let apps = getApps();
  if (apps.length === 0) {
    return initializeApp(environment.firebase);
  }
  return apps[0];
}