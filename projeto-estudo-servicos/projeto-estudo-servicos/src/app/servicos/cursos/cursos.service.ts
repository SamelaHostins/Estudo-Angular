import { LogService } from './../../shared/log.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //EventEmitter, objeto para emitir eventos, para que
  //a aplicação execute este evento. E sempre que houver mudança
  //o cígo pode fazer algo
  emitirCursoCriado= new EventEmitter<string>();

  //static = nao precisa da instância da classe para acessar o mesmo
  static criouNovoCurso= new EventEmitter<string>();

  private cursos: string[]= ['Aprenda a Cozinhar', 'Como ganhar 10 mil reais em uma Semana'];

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;
  }

  addCurso(curso: string){   //É igual a "criando.. + curso"
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

  constructor(private logService: LogService) {
    console.log('CursoService');
  }
}
