import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class'; // User-Modell
import { Firestore, doc, updateDoc } from '@angular/fire/firestore'; // Firestore Funktionen
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
    CommonModule,
    MatDatepickerModule
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user: User = new User(); // User-Objekt
  userId!: string; // Füge diese Zeile hinzu, um die userId-Eigenschaft zu definieren
  loading: boolean = false; // loading Variable hinzugefügt

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) {}

  saveUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
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
