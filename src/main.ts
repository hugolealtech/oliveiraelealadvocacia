// src/main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LoginAdministrativoComponent } from './app/components/login-administrativo/login-administrativo.component';
import { AdministrativoDashboardComponent } from './app/components/administrativo-dashboard/administrativo-dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'login-administrativo', component: LoginAdministrativoComponent },
      { path: 'administrativo-dashboard', component: AdministrativoDashboardComponent },
      { path: '', redirectTo: '/login-administrativo', pathMatch: 'full' },
    ]),
  ],
}).catch((err) => console.error(err));
