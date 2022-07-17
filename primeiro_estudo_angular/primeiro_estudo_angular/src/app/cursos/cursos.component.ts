import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string = 'https://www.youcom.com.br/?msclkid=fe7a261b609119db5d3644dd8bc167b5&utm_source=bing&utm_medium=cpc&utm_campaign=%5BRAC%5D%20Institucional&utm_term=%2Byoucom&utm_content=Youcom%20-%20Frase%20e%20Ampla';
  cursos: string[];

  constructor(private cursosService: CursosService) {
    this.nomePortal;

    this.cursos = this.cursosService.getCursos();
   }

  ngOnInit(): void {
  }

}
