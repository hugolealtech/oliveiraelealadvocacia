import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClientComponent } from './pages/client/client.component';
import { DashboardAuthGuard } from './autenticacao/auth.guard';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    { path: '', component: HomeComponent}, // Rota raiz
    { path: 'home', component: HomeComponent},
    {path:'header', component: HeaderComponent},
    { path: 'login', component: LoginComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'meeting', component: MeetingComponent},  
    { path: 'dashboard', component: DashboardComponent, canActivate: [DashboardAuthGuard]},
    { path: 'register', component: RegisterComponent },
    { path: 'client', component: ClientComponent},
]