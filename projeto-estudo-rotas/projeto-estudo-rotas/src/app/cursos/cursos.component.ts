import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[] = [];


  constructor(private service: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.service.getCursos();
  }

}
