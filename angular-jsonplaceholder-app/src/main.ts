import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './app/pages/home/home.component';
import { ApiDataComponent } from './app/pages/api-data/api-data.component';
import { FormComponent } from './app/pages/form/form.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide the routes
    provideHttpClient(),   // Provide HttpClient for API requests
  ],
}).catch((err) => console.error(err));
