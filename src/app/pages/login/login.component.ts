import { HttpClient, withFetch } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../autenticacao/auth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  // Propriedade para observar a sessão do usuário
  sessao$: Observable<any> = this.authService.getSessao(); // Ajuste para refletir o método real do AuthService

  // Template alternativo para usuários não logados
  menuNaoLogado: string = 'Você não está logado.';

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  errorMessage: string | null = null;

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.login(rawForm.email, rawForm.password).subscribe(
      () => {
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
