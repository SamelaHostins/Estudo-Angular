import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit  {

  cursos: string[] = ["Netflix", "Amazon", "DisneyPlus"];

  constructor() { }

  ngOnInit() {
    let curso;
    for (let i=0; i<this.cursos.length; i++){
       curso = this.cursos[i];
    }
  }

}
