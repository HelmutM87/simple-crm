// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter, withComponentInputBinding } from '@angular/router';
// import { routes } from './app/app.routes';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; // Firebase App Provider
// import { provideFirestore, getFirestore } from '@angular/fire/firestore'; // Firestore Provider
// import { provideDatabase, getDatabase } from '@angular/fire/database'; // Firebase Realtime Database Provider
// import { provideStorage, getStorage } from '@angular/fire/storage'; // Firebase Storage Provider

// // Firebase Konfiguration
// const firebaseConfig = {
//   apiKey: "AIzaSyAggoy6q6fh44y0KHYAZhZwOehHaeg_YFY",
//   authDomain: "simple-crm-9ae16.firebaseapp.com",
//   projectId: "simple-crm-9ae16",
//   storageBucket: "simple-crm-9ae16.appspot.com",
//   messagingSenderId: "324080884315",
//   appId: "1:324080884315:web:e803f9f1ba4aa9f7e2bd7e"
// };

// bootstrapApplication(AppComponent, {
//   providers: [
//     provideRouter(routes, withComponentInputBinding()),
//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideFirestore(() => getFirestore()),
//     provideDatabase(() => getDatabase()),
//     provideStorage(() => getStorage())
//   ]
// }).catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app'; // Firebase App Provider
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; // Firestore Provider
import { provideDatabase, getDatabase } from '@angular/fire/database'; // Firebase Realtime Database Provider
import { provideStorage, getStorage } from '@angular/fire/storage'; // Firebase Storage Provider
import { provideAnimations } from '@angular/platform-browser/animations'; // Animationen hier importieren

// Firebase Konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyAggoy6q6fh44y0KHYAZhZwOehHaeg_YFY",
  authDomain: "simple-crm-9ae16.firebaseapp.com",
  projectId: "simple-crm-9ae16",
  storageBucket: "simple-crm-9ae16.appspot.com",
  messagingSenderId: "324080884315",
  appId: "1:324080884315:web:e803f9f1ba4aa9f7e2bd7e"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideAnimations() // Synchrones Animationsmodul hinzufügen
  ]
}).catch(err => console.error(err));
