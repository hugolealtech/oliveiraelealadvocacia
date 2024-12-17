import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  standalone:true,
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  imports:[ReactiveFormsModule, CommonModule]
})
export class ContatoComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      telefone: ['', [
        Validators.required,
        Validators.pattern(/^\(?[1-9]{2}\)? ?(?:9[1-9][0-9]{3}|[2-8][0-9]{3})\-?[0-9]{4}$/)
      ]],
      
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      emailjs
        .send(
          'service_hbqeiv9', // Substitua pelo seu Service ID
          'template_nu94t26', // Substitua pelo seu Template ID
          {
            name: formData.name,
            telefone: formData.telefone,
            email: formData.email,
            message: formData.message,
          },
          '6OmwV3Y29ZXQxiAt2' // Substitua pela sua Public Key
        )
        .then(
          (response) => {
            alert('Mensagem enviada com sucesso!');
            this.contactForm.reset();
          },
          (error) => {
            alert('Erro ao enviar mensagem. Tente novamente.');
            console.error('Erro:', error);
          }
        );
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
