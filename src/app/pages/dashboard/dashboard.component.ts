import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../autenticacao/auth.service';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-dashboard',
  imports: [ListaComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
