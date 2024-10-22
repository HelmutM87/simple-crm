// import { Component } from '@angular/core';
// import { Firestore,  } from '@angular/fire/firestore';
// import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-user-detail',
//   standalone: true,
//   imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
//   templateUrl: './user-detail.component.html',
//   styleUrls: ['./user-detail.component.scss']
// })
// export class UserDetailComponent {

//   userId: string = ''; // Stelle sicher, dass userId als string deklariert ist
//   user:any = {};

//   constructor(private route: ActivatedRoute, private firestore: Firestore) {}

//   ngOnInit(): void {

//     this.route.paramMap.subscribe(paramMap => {
//       const id = paramMap.get('id'); // Hole die ID aus den Parametern
//       if (id) {
//         this.userId = id; // Weise nur zu, wenn die ID nicht null ist
//         console.log('GOT ID:', this.userId);
//       } else {
//         console.error('ID is null');
//       }
//     });
//   }

//   getUser(){
//     this.firestore
//     .collection('users')
//     .doc(this.userId)
//     .valueChanges()
//     .subscribe((user: any) => {
// this.user = user;
// console.log('Retrieved user', this.user)
//     });
//   }
// }







// import { Component } from '@angular/core';
// import { Firestore, doc, docData } from '@angular/fire/firestore'; // Importiere doc und docData
// import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
// import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs'; // Für das Abonnieren der Dokumentdaten
// import { User } from '../../models/user.class';

// @Component({
//   selector: 'app-user-detail',
//   standalone: true,
//   imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent],
//   templateUrl: './user-detail.component.html',
//   styleUrls: ['./user-detail.component.scss']
// })
// export class UserDetailComponent {

//   userId: string = ''; // Stelle sicher, dass userId als string deklariert ist
//   // user$: Observable<any> | undefined; // Observable für User-Daten
//   user$: User = new User();

//   constructor(private route: ActivatedRoute, private firestore: Firestore) {}

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(paramMap => {
//       const id = paramMap.get('id'); // Hole die ID aus den Parametern
//       if (id) {
//         this.userId = id; // Weise nur zu, wenn die ID nicht null ist
//         console.log('GOT ID:', this.userId);
//         this.getUser(); // Rufe die Methode auf, um den Benutzer zu holen
//       } else {
//         console.error('ID is null');
//       }
//     });
//   }

//   // getUser() {
//   //   const userDocRef = doc(this.firestore, `users/${this.userId}`); // Referenz zum Dokument
//   //   this.user$ = docData(userDocRef); // Hole das Observable für die Benutzerdaten
//   //   this.user$
//   //   .subscribe(user => {
//   //     console.log('Retrieved user:', user);
//   //   });
//   // }

//   getUser() {
//     const userDocRef = doc(this.firestore, `users/${this.userId}`); // Referenz zum Dokument
//     this.user$ = docData(userDocRef); // Hole das Observable für die Benutzerdaten
//     this.user$
//     .subscribe((user: any) => {
//       this.user = new User(user);
//       console.log('Retrieved user:', user);
//     });
//   }
// }





import { Component } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore'; // Importiere doc und docData
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'; // Für das Abonnieren der Dokumentdaten
import { User } from '../../models/user.class'; // Importiere deine User-Klasse
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatIcon, MatButton, MatIconModule, MatButtonModule, MatMenuModule, MatDialogModule],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {

  userId: string = ''; // Stelle sicher, dass userId als string deklariert ist
  // user$: Observable<User | undefined>; // Observable für User-Daten
  user$: Observable<User | undefined> | undefined;

  user: User = new User(); // Leere User-Instanz

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id'); // Hole die ID aus den Parametern
      if (id) {
        this.userId = id; // Weise nur zu, wenn die ID nicht null ist
        console.log('GOT ID:', this.userId);
        this.getUser(); // Rufe die Methode auf, um den Benutzer zu holen
      } else {
        console.error('ID is null');
      }
    });
  }

  getUser() {
    const userDocRef = doc(this.firestore, `users/${this.userId}`); // Referenz zum Dokument
    this.user$ = docData(userDocRef) as Observable<User | undefined>; // Cast auf Observable<User | undefined>

    // Benutzerdaten abonnieren und in User-Instanz umwandeln
    this.user$.subscribe((userData: User | undefined) => {
      if (userData) {
        this.user = new User(userData); // Benutzerdaten in User-Instanz umwandeln
        console.log('Retrieved user:', this.user);
      } else {
        console.error('User not found');
      }
    });
  }

  openAddressDialog() {

  }

  editUserDetail() {
this.dialog.open(DialogEditUserComponent);
  }

  editAddress() {
    this.dialog.open(DialogEditUserComponent);
  }
}

