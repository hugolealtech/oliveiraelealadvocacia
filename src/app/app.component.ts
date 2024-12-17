import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { AdvogadosComponent } from './components/advogados/advogados.component';
import { BPCComponent } from './pages/bpc/bpc.component';
import { PensaoMorteComponent } from './pages/pensao-morte/pensao-morte.component';
import { PlanejamentoPrevidenciarioComponent } from './pages/planejamento-previdenciario/planejamento-previdenciario.component';
import { EmpresarialComponent } from './pages/empresarial/empresarial.component';
import { CivelComponent } from './pages/civel/civel.component';


import { Observable } from 'rxjs';
import { SessaoService } from './sessao.service';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './autenticacao/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { OnInit } from '@angular/core';
import { DashboardAuthGuard } from './autenticacao/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AdvogadosComponent,
    BPCComponent,
    PensaoMorteComponent,
    PlanejamentoPrevidenciarioComponent,
    EmpresarialComponent,
    CivelComponent,
    DashboardComponent, 
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {
  authService = inject(AuthService); // Injeta o serviço diretamente
  http = inject(HttpClient); // Injeta o HttpClient diretamente

  ngOnInit(): void {
    // Código de inicialização
  }

  logout(): void {
    this.authService.logout();
  }
  
}


