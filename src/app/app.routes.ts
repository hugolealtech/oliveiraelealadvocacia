import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MeetingComponent } from './pages/meeting/meeting.component';
import { DashboardComponent} from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { ClientComponent } from './pages/client/client.component';
import { DashboardAuthGuard } from './autenticacao/auth.guard';
import { HeaderComponent } from './components/header/header.component';
import { AdvogadosComponent } from './components/advogados/advogados.component';
import { BPCComponent } from './pages/bpc/bpc.component';
import { CivelComponent } from './pages/civel/civel.component';
import { EmpresarialComponent } from './pages/empresarial/empresarial.component';
import { PensaoMorteComponent } from './pages/pensao-morte/pensao-morte.component';
import { PlanejamentoPrevidenciarioComponent } from './pages/planejamento-previdenciario/planejamento-previdenciario.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HugoComponent } from './pages/hugo/hugo.component';
import { LiviaComponent } from './pages/livia/livia.component';
import { BrisaComponent } from './pages/brisa/brisa.component';
import { ParceirosComponent } from './pages/parceiros/parceiros.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { FactorId } from '@angular/fire/auth';
import { FaqComponent } from './pages/faq/faq.component';
import { ListaComponent } from './pages/lista/lista.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full',},    
    { path: 'header', component: HeaderComponent},
    { path: 'login', component: LoginComponent},
    { path: 'advogados', component: AdvogadosComponent},
    { path: 'contato', component: ContatoComponent},
    { path: 'meeting', component: MeetingComponent},  
    { path: 'dashboard', component: DashboardComponent}, //canActivate: [DashboardAuthGuard]},
    { path: 'register', component: RegisterComponent },
    { path: 'client', component: ClientComponent},
    { path: 'bpc', component:BPCComponent},
    { path: 'civel', component: CivelComponent},
    { path: 'empresarial', component: EmpresarialComponent},
    { path: 'pensao-morte', component: PensaoMorteComponent},
    { path: 'planejamento-previdenciario', component: PlanejamentoPrevidenciarioComponent},
    { path: 'about-us', component: AboutUsComponent},
    { path: 'hugo', component:HugoComponent},
    { path: 'livia',component:LiviaComponent},
    { path: 'brisa', component: BrisaComponent},
    { path: 'parceiros', component: ParceirosComponent},
    { path: 'under-construction',component:UnderConstructionComponent},
    { path: 'faq', component:FaqComponent}, 
    { path: 'lista', component:ListaComponent},
    // { path: 'login-cliente',component:LoginComponent},



    

]