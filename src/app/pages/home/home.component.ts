import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdvogadosComponent } from '../../components/advogados/advogados.component';
import { EmpresarialComponent } from '../empresarial/empresarial.component';
import { CarousselComponent } from '../../components/caroussel/caroussel.component';
import { AboutUsComponent } from '../about-us/about-us.component';


@Component({
  selector: 'app-home',
  imports: [RouterOutlet, AdvogadosComponent, RouterLink,CarousselComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}