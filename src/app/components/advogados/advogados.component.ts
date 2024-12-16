import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BrisaComponent } from '../../pages/brisa/brisa.component';

@Component({
  selector: 'app-advogados',
  imports: [RouterOutlet, RouterLink, BrisaComponent],
  templateUrl: './advogados.component.html',
  styleUrl: './advogados.component.css'
})
export class AdvogadosComponent {

}
