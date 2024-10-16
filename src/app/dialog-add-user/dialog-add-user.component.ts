

// import { Component } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { FormsModule } from '@angular/forms';
// import { User } from '../../models/user.class'; // User-Modell
// import { Firestore, collection, addDoc } from '@angular/fire/firestore'; // Firestore Funktionen
// import {MatProgressBarModule} from '@angular/material/progress-bar';

// @Component({
//   selector: 'app-dialog-add-user',
//   standalone: true,
//   imports: [
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatDatepickerModule,
//     FormsModule,
//     MatProgressBarModule
//   ],
//   templateUrl: './dialog-add-user.component.html',
//   styleUrls: ['./dialog-add-user.component.scss']
// })
// export class DialogAddUserComponent {
//   user: User = new User(); // Neues User-Objekt
//   birthDate: Date = new Date(); // Geburtsdatum
//   loading = false;

//   constructor(private firestore: Firestore) {} // Firestore im Constructor injizieren

//   saveUser() {
//     // Geburtstagsdatum in Millisekunden konvertieren
//     this.user.birthDate = this.birthDate.getTime();
//     console.log('Aktueller Benutzer:', this.user);
//     this.loading = true;

//     // Dokument in Firestore hinzufügen
//     addDoc(collection(this.firestore, 'users'), { ...this.user })
//       .then(result => {
//         this.loading = false;
//         console.log('Benutzer erfolgreich hinzugefügt:', result);
//       })
//       .catch(error => {
//         console.error('Fehler beim Hinzufügen des Benutzers:', error);
//       });
//   }
// }

import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog'; // MatDialogRef importieren


interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  street: string;
  zipCode: string;
  birthDate: number;
}

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    street: '',
    zipCode: '',
    birthDate: new Date().getTime()
  };
  birthDate: Date = new Date(); 
  loading = false;

  // constructor(private firestore: Firestore) {}
  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Aktueller Benutzer:', this.user);
    this.loading = true;
    addDoc(collection(this.firestore, 'users'), { ...this.user })
      .then(result => {
        this.loading = false;
        console.log('Benutzer erfolgreich hinzugefügt:', result);
        this.dialogRef.close();
      })
      .catch(error => {
        console.error('Fehler beim Hinzufügen des Benutzers:', error);
      });
  }

  closeDialog() {
    this.dialogRef.close(); // Schließt den Dialog, wenn "Cancel" geklickt wird
  }
}
