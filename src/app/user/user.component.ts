// import { Component } from '@angular/core';
// import { MatIcon, MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
// import { Firestore, collection, collectionData } from '@angular/fire/firestore'; // Importiere collection und collectionData
// import { Observable } from 'rxjs'; // Um die Daten zu abonnieren
// import {MatCardModule} from '@angular/material/card';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   city: string;
//   // Füge hier weitere Felder hinzu, falls benötigt
// }

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [MatIconModule, MatIcon, MatButtonModule, MatTooltipModule, MatDialogModule, MatCardModule, CommonModule],
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.scss']
// })
// export class UserComponent {
//   users$: Observable<any[]> | undefined;
//   // allUsers = [];
//   allUsers: User[] = [];

//   constructor(public dialog: MatDialog, private firestore: Firestore) {}

//   ngOnInit(): void {
//     // Die Collection 'user' aus Firestore referenzieren
//     const usersCollection = collection(this.firestore, 'users');
    
//     // Änderungen in der Collection abonnieren
//     this.users$ = collectionData(usersCollection, { idField: 'id' }); // `idField` gibt das Dokumenten-ID zurück
//     // this.users$ = collectionData(usersCollection, { idField: 'id' }) as Observable<any[]>;


//     // Subscriben, um die Änderungen in der Konsole zu sehen (kann auch direkt im Template verwendet werden)
//     this.users$.subscribe((changes: any) => {
//       console.log('Empfangene Änderungen aus der DB:', changes);
//       this.allUsers = changes;
//     });
//   }

//   openDialog() {
//     this.dialog.open(DialogAddUserComponent);
//   }
// }


import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore'; // Importiere collection und collectionData
import { Observable } from 'rxjs'; // Um die Daten zu abonnieren
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  id: string; // Füge die ID hinzu
  // Füge hier weitere Felder hinzu, falls benötigt
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule, 
    MatIcon, 
    MatButtonModule, 
    MatTooltipModule, 
    MatDialogModule, 
    MatCardModule, 
    CommonModule
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  users$: Observable<any[]> | undefined;
  allUsers: User[] = [];
  // userId = '';


  constructor( private route:ActivatedRoute,
    public dialog: MatDialog, 
    private firestore: Firestore,
    private router: Router 
  ) {}

  ngOnInit(): void {
    // Die Collection 'users' aus Firestore referenzieren
    const usersCollection = collection(this.firestore, 'users');
    
    // Änderungen in der Collection abonnieren
    this.users$ = collectionData(usersCollection, { idField: 'id' });

    // Subscriben, um die Änderungen zu erhalten
    this.users$.subscribe((changes: any) => {
      console.log('Empfangene Änderungen aus der DB:', changes);
      this.allUsers = changes;
    });

  //   this.route.paramMap.subscribe( paramMap => {
  //      this.userId = paramMap.get('bank');
  // })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  goToDetail(userId: string) {
    this.router.navigate(['/user', userId]); // Navigiere zur Detailseite des Users
  }
}
