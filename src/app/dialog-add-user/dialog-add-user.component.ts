// import { Component } from '@angular/core';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { User } from '../../models/user.class';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-dialog-add-user',
//   standalone: true,
//   imports: [
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatDatepickerModule,
//     MatNativeDateModule,
//     FormsModule
//   ],
//   templateUrl: './dialog-add-user.component.html',
//   styleUrls: ['./dialog-add-user.component.scss']
// })
// export class DialogAddUserComponent {
//   user: User = new User();
//   birthDate: Date;

//   saveUser(){
//     this.user.birthDate = this.birthDate.getTime();
//     console.log('Current user is', this.user);
//   }
// }

import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user: User = new User();
  birthDate: Date = new Date();

  saveUser(){
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user);
  }
}

