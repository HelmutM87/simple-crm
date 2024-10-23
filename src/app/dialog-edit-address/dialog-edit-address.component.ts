import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class'; // User-Modell
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore'; // Firestore Funktionen
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent {
  user: User = new User(); // User-Objekt
  userId!: string; // Non-null Assertion Operator verwendet
  loading: boolean = false; // loading Variable hinzugefügt

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditAddressComponent>) {} // Firestore im Constructor injizieren

  saveUserAddress() {
    this.loading = true;
    const usersCollection = collection(this.firestore, 'users'); // Verwende die collection-Funktion
    const userDocRef = doc(usersCollection, this.userId); // Referenz zu einem Dokument mit userId
    updateDoc(userDocRef, this.user.toJSON())
    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });

  }

  closeDialog() {
    this.dialogRef.close();
  }
}
