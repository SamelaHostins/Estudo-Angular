import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receber',
  templateUrl: './receber-curso-criado.component.html',
  styleUrls: ['./receber-curso-criado.component.css']
})

//É um componente filho do criar-curso
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string ='';

  constructor(private service: CursosService) {

   }

  ngOnInit() {
    this.service.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
