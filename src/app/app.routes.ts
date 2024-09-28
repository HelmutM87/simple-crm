import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard-component', component: DashboardComponent },
    { path: 'user-component', component: UserComponent }
];
