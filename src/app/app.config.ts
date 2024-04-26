import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { PickerComponent, PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"dabubble-dab15","appId":"1:208784063504:web:cf4c78264aeb5e9b515e95","storageBucket":"dabubble-dab15.appspot.com","apiKey":"AIzaSyATtpEh3uhX5_sZaiOitRpVTqlRtIa_2IE","authDomain":"dabubble-dab15.firebaseapp.com","messagingSenderId":"208784063504"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideStorage(() => getStorage())), PickerComponent, EmojiModule, PickerModule]
};
