import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiDataComponent } from './pages/api-data/api-data.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Default route
  { path: 'home', component: HomeComponent },          // Home page
  { path: 'api-data', component: ApiDataComponent },   // Fetch and display API data
  { path: 'form', component: FormComponent },          // Feedback form page
  { path: '**', redirectTo: 'home' },                  // Wildcard route for invalid paths
];
