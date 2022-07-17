import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'A revolução dos bichos',
    rating: 4.4345,
    paginas: 157,
    preco: 19.90,
    dataLancamento: new Date(2007, 5, 14),
    url: 'https://www.todamateria.com.br/a-revolucao-dos-bichos/'
  };

  livros: string[] = ['Java', 'Angular'];

  filtro: string = '';

  valorAsync = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Valor assincrono'), 2000)
    });

  obterCursos(){
    if(this.livros.length === 0 || this.filtro === undefined
      || this.filtro.trim() === ''){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if(v.toLowerCase().indexOf(this.filtro.toLowerCase()) >=0){
        return true;
      }
      return false;
    });
  }

  addCurso(valor: any){
    this.livros.push(valor);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
