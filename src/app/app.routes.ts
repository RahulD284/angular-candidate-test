import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { TaskByIdComponent } from './task-by-id/task-by-id.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: TaskByIdComponent}
];
