import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../autenticacao/auth.service'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class DashboardAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Verifica se o usuário está autenticado
    if (this.authService.isLoggedIn()) {
      return true; // Permite acesso à rota
    }

    // Redireciona para a página de login se não estiver autenticado
    this.router.navigate(['/login']);
    return false;
  }
  
}