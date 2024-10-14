

import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Firebase Firestore Funktionen
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore); // Firestore injizieren

  constructor() {
    // Firestore-Logik oder Abfragen können hier ausgeführt werden, falls nötig
  }

  // Beispiel: Methode zum Hinzufügen eines Users in Firestore
  addUser(userData: any) {
    const userCollection = collection(this.firestore, 'users');
    return addDoc(userCollection, userData);
  }
}
