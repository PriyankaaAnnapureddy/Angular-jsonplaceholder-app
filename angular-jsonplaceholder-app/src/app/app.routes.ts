import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ApiDataComponent } from './pages/api-data/api-data.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to Home
  { path: 'home', component: HomeComponent },
  { path: 'api-data', component: ApiDataComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: 'home' }, // Wildcard route for invalid paths
];