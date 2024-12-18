import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  User,
} from '@angular/fire/auth';
import { from, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  isLoggedIn(): boolean {
    return !this.sessao.value; // Verifica se há um usuário logado
  }

  logout(): void {
    this.firebaseAuth.signOut().then(() => this.sessao.next(null)); // Sai e limpa a sessão
  }

  register(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );
    return from(promise);
  }

  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});
    return from(promise);
  }
}

