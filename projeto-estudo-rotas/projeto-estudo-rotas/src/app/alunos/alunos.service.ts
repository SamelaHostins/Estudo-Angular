import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[]= [
    {id: 1, nome: 'Sâmela Hostins', idade: 19, email:'samela@hostins.com.br'},
    {id: 2, nome: 'Arthur Ceron', idade: 19, email: 'arthur@gmail.com'},
    {id: 3, nome: 'Emily Hostins', idade: 20, email: 'emily@hotmail.com.br'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAlunoById(id: number){
    for(let i = 0; i < this.alunos.length; i++){
      let aluno = this.alunos[i];

        if(aluno.id == id){
          return aluno;
      }
    }
    return null
  }

  constructor() { }
}
