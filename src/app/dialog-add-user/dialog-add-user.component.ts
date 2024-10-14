

import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class'; // User-Modell
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Firestore Funktionen

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user: User = new User(); // Neues User-Objekt
  birthDate: Date = new Date(); // Geburtsdatum

  constructor(private firestore: Firestore) {} // Firestore im Constructor injizieren

  saveUser() {
    // Geburtstagsdatum in Millisekunden konvertieren
    this.user.birthDate = this.birthDate.getTime();
    console.log('Aktueller Benutzer:', this.user);

    // Dokument in Firestore hinzufügen
    addDoc(collection(this.firestore, 'users'), { ...this.user })
      .then(result => {
        console.log('Benutzer erfolgreich hinzugefügt:', result);
      })
      .catch(error => {
        console.error('Fehler beim Hinzufügen des Benutzers:', error);
      });
  }
}
