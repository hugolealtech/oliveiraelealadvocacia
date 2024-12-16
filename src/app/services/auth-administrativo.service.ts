import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, User, UserCredential } from '@angular/fire/auth';
import { from, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAdministrativoService {
  private firebaseAuth = inject(Auth);
  private sessao = new BehaviorSubject<User | null>(null); // Controle de sessão do usuário

  constructor() {
    // Monitora mudanças no estado de autenticação do Firebase
    onAuthStateChanged(this.firebaseAuth, (user) => {
      this.sessao.next(user);
    });
  }

  // Método para obter a sessão do usuário
  getSessao(): Observable<User | null> {
    return this.sessao.asObservable();
  }

  // Método para verificar se o usuário está logado
  isLoggedIn(): boolean {
    return !!this.sessao.value; // Retorna se há um usuário logado
  }

  // Método de logout
  logout(): void {
    this.firebaseAuth.signOut().then(() => this.sessao.next(null)); // Sai e limpa a sessão
  }

  // Método de login
  login(email: string, password: string): Observable<UserCredential> {
    // Retorna o UserCredential (informações sobre o login)
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password);
    return from(promise);
  }
}
