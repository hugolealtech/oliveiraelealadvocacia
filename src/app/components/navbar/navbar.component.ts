import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CasosSucessoComponent } from '../../pages/casos-sucesso/casos-sucesso.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, CasosSucessoComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchQuery.trim()) {
      // Redireciona para a página de pesquisa
      this.router.navigate(['/search'], { queryParams: { q: this.searchQuery } });
    } else {
      alert('Por favor, insira um termo de pesquisa.');
    }
  }
}
