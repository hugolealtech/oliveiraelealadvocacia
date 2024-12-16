// src/app/components/login-administrativo/login-administrativo.component.ts
import { Component } from '@angular/core';
import { AuthAdministrativoService } from '../../services/auth-administrativo.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-login-administrativo',
  templateUrl: './login-administrativo.component.html',
  styleUrls: ['./login-administrativo.component.css'],
  imports:[FormsModule],
})
export class LoginAdministrativoComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthAdministrativoService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        console.log('Login administrativo realizado com sucesso!');
        // Redirecionar para outra página após o login
        this.router.navigate(['/administrativo-dashboard']);
      },
      error: (err) => {
        console.error('Erro no login:', err);
        // Tratar erro de login
      }
    });
  }
}
