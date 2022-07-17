import { Component, OnInit } from '@angular/core';

import { CursosService } from './../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers: [CursosService]
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];

  onAddCurso(curso: string){
    this.service.addCurso(curso);
  }

  constructor(private service: CursosService) { }

  ngOnInit() {
    this.cursos = this.service.getCursos();
  }

}
