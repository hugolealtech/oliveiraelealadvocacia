// Importa o decorator Injectable, necessário para definir um serviço no Angular
import { Injectable } from "@angular/core";
// Importa BehaviorSubject, uma classe do RxJS que permite gerenciar e observar mudanças de estado
import { BehaviorSubject } from "rxjs";
// Importa o modelo Sessao que define a estrutura dos dados da sessão
import { Sessao } from "./sessao.model";

// Define uma constante para a chave usada no sessionStorage para armazenar o token de autenticação
const CHAVE_ACCESS_TOKEN = "auth";

// Declara que esta classe é um serviço Angular e estará disponível no nível raiz da aplicação
@Injectable({
  providedIn: "root",
})
export class SessaoService {
  // Cria um BehaviorSubject que manterá o estado atual da sessão, começando como `null`
  private sessao = new BehaviorSubject<Sessao | null>(null);

  // O construtor é executado quando o serviço é inicializado
  constructor() {
    // Verifica se o código está sendo executado no navegador antes de tentar restaurar a sessão
    if (this.isBrowser()) {
      this.restaurarSessao();
    }
  }

  // Método auxiliar para verificar se o ambiente atual é um navegador
  isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  // Método para tentar restaurar a sessão a partir do sessionStorage
  restaurarSessao() {
    // Se não está no navegador, exibe um aviso e encerra o método
    if (!this.isBrowser()) {
      console.warn("SessionStorage não disponível no ambiente atual.");
      return;
    }

    // Obtém os dados da sessão armazenados no sessionStorage usando a chave definida
    const jsonSessao = sessionStorage.getItem(CHAVE_ACCESS_TOKEN);

    // Se não há dados no sessionStorage, retorna sem realizar nenhuma ação
    if (!jsonSessao) {
      return;
    }

    // Converte os dados em formato JSON para o objeto Sessao
    const dadosSessao: Sessao = JSON.parse(jsonSessao);

    // Atualiza o BehaviorSubject com os dados restaurados da sessão
    this.sessao.next(dadosSessao);
  }

  // Método para salvar os dados da sessão no sessionStorage
  salvarSessao(dadosSessao: Sessao) {
    // Se não está no navegador, exibe um aviso e encerra o método
    if (!this.isBrowser()) {
      console.warn("SessionStorage não disponível no ambiente atual.");
      return;
    }

    // Converte os dados da sessão para JSON e os salva no sessionStorage
    sessionStorage.setItem(CHAVE_ACCESS_TOKEN, JSON.stringify(dadosSessao));

    // Atualiza o BehaviorSubject com os novos dados da sessão
    this.sessao.next(dadosSessao);
  }

  // Método para limpar os dados da sessão no sessionStorage
  limparSessao() {
    // Se não está no navegador, exibe um aviso e encerra o método
    if (!this.isBrowser()) {
      console.warn("SessionStorage não disponível no ambiente atual.");
      return;
    }

    // Remove todos os itens armazenados no sessionStorage
    sessionStorage.clear();

    // Atualiza o BehaviorSubject para indicar que não há sessão ativa
    this.sessao.next(null);
  }

  // Método para expor o Observable da sessão, permitindo que outros componentes "escutem" mudanças no estado
  getSessao() {
    return this.sessao.asObservable();
  }

  // Método para verificar se o usuário está logado com base no estado atual da sessão
  estaLogado() {
    return this.sessao.value !== null;
  }
}
