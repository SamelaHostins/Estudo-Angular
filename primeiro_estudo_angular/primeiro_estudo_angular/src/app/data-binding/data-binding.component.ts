import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

url: any = 'http:samela.com';
urlImagem ='https://meioambiente.culturamix.com/blog/wp-content/gallery/texto-sobre-natureza/thumbs/thumbs_texto-sobre-natureza-4.jpg';
cursoAngular: boolean = true;

getValor(){
return 1;
}

getCurtirCurso(){
  return true;
}

  constructor() {
    this.url;
    this.cursoAngular;
    this.urlImagem;
  }

  ngOnInit(): void {
  }

}
