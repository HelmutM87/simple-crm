import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard-component', component: DashboardComponent },
    { path: 'user-component', component: UserComponent },
    { path: 'user/:id', component: UserDetailComponent }
];
