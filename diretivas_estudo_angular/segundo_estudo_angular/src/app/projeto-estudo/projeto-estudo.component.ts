import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto-estudo',
  templateUrl: './projeto-estudo.component.html',
  styleUrls: ['./projeto-estudo.component.css']
})
export class ProjetoEstudoComponent  {

  //variaveis criadas para estudar
  valorAtual: string = '';
  valorSalvo: any;
  isMouseOver: boolean = false;
  nome: any = 'abc';
  nome3: string = 'abc';
  nome2: any;

  //objeto pessoa
pessoa: any ={
  nome: 'Samy',
  idade: '19'
}

//outras variaveis para estudar
nomeDoCurso: string = 'Angular';
valorInicial: number = 15;

  botaoClicado(){
    alert('Botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
  this.valorAtual =(<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  salvarNome(evento: KeyboardEvent){
    this.nome2 =(<HTMLInputElement>evento.target).value;
  }

//Nega o valor da própria variavel. Se coloca em cima = true
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento: any){
    console.log(evento.novoValor);
  }

  constructor() {
   }

}
