import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../autenticacao/auth.service'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

// Fechamento da primeira classe correto

// Agora a segunda classe DashboardAuthGuard

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
