import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent implements OnInit {

// Usa o decorador @ViewChild para acessar um elemento DOM com o ID "myModal".
@ViewChild('myModal') model: ElementRef | undefined;
// Cria uma instância vazia de Cliente para ser usada nos formulários.
clientObj: Cliente = new Cliente();
// Lista de clientes para exibir, editar e gerenciar.
clientList: Cliente[] = [];

// Método do ciclo de vida que é executado ao inicializar o componente.
ngOnInit(): void {
  // Busca dados do LocalStorage para inicializar a lista de clientes.
  const localData = localStorage.getItem("angularCrud");
  if(localData != null) {
    // Se houver dados no LocalStorage, converte-os para array de objetos Cliente.
    this.clientList = JSON.parse(localData)
  }
}

// Método para abrir o modal no DOM.
openModel() {
  // Localiza o modal no DOM pelo ID.
  const model = document.getElementById("myModal");
  if (model != null) {
    // Altera o estilo para exibir o modal.
    model.style.display = 'block';
  }
}

// Método para fechar o modal no DOM.
closeModel() {
  // Reseta o objeto clientObj para os valores padrão.
  this.clientObj = new Cliente();
  if (this.model != null) {
    // Altera o estilo para ocultar o modal.
    this.model.nativeElement.style.display = 'none';
  }
}

// Método para excluir um cliente da lista.
onDelete(item: Cliente) {
  // Solicita confirmação do usuário antes de excluir.
  const isDelet = confirm("Você tem certeza que quer deletar?");
  if(isDelet) {
    // Encontra o índice do cliente na lista.
    const currentRecord = this.clientList.findIndex(m => 
      m.id === this.clientObj.id);
    // Remove o cliente do array.
    this.clientList.splice(currentRecord, 1);
    // Atualiza o LocalStorage com a lista modificada.
    localStorage.setItem('angularCrud', JSON.stringify(this.clientList));
  }
}

// Método para editar os dados de um cliente.
onEdit(item: Cliente) {
  // Atribui os dados do cliente selecionado ao clientObj.
  this.clientObj = item;
  // Abre o modal para edição.
  this.openModel();
}

// Método para atualizar os dados de um cliente existente.
update() {
  // Busca o cliente atual na lista pelo ID.
  const currentRecord = this.clientList.find(m => 
    m.id === this.clientObj.id);
  if(currentRecord != undefined) {
    // Atualiza os campos do cliente com os novos valores.
    currentRecord.name = this.clientObj.name;
    currentRecord.address = this.clientObj.address;
    currentRecord.mobileNo = this.clientObj.mobileNo;
  };
  // Salva a lista atualizada no LocalStorage.
  localStorage.setItem('angularCrud', JSON.stringify(this.clientList));
  // Fecha o modal.
  this.closeModel();
}

// Método para salvar um novo cliente na lista.
save() {
  debugger; // Ponto de depuração para verificar o estado durante a execução.
  // Verifica se há dados existentes no LocalStorage.
  const isLocalPresent = localStorage.getItem("angularCrud");
  if (isLocalPresent != null) {
    // Converte os dados existentes em array.
    const oldArray = JSON.parse(isLocalPresent);
    // Atribui um novo ID baseado no tamanho do array.
    this.clientObj.id = oldArray.length + 1;
    // Adiciona o novo cliente à lista.
    oldArray.push(this.clientObj);
    // Atualiza a lista de clientes e o LocalStorage.
    this.clientList = oldArray;
    localStorage.setItem('angularCrud', JSON.stringify(oldArray));
  } else {
    // Cria um novo array caso o LocalStorage esteja vazio.
    const newArr = [];
    newArr.push(this.clientObj);
    this.clientObj.id = 1;
    this.clientList = newArr;
    // Salva a lista inicial no LocalStorage.
    localStorage.setItem('angularCrud', JSON.stringify(newArr));
  }
  // Fecha o modal após salvar.
  this.closeModel();
}
}

// Classe para representar o modelo de dados Cliente.
export class Cliente {
// Propriedades do cliente, todas inicializadas com valores padrão.
id: number;
name: string;
mobileNo: string;
email: string;
city: string;
state: string;
pincode: string;
address: string;

// Construtor que inicializa todas as propriedades com valores padrão.
constructor() {
  this.id = 0;
  this.address = '';
  this.city = '';
  this.email = '';
  this.mobileNo = '';
  this.name = '';
  this.state = '';
  this.pincode = '';
}
}