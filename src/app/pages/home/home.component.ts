import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdvogadosComponent } from '../../components/advogados/advogados.component';
import { EmpresarialComponent } from '../empresarial/empresarial.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, AdvogadosComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}