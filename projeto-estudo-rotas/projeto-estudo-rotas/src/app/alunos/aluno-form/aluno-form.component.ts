import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno: any;
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: AlunosService,
    ) {

    }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
    (params: any) => {
      let id = params['id'];

      this.aluno = this.service.getAlunoById(id);

      if(this.aluno === null){
        this.aluno = {};
      }
    }
  );
}

  ngOnDestroy()  {
    this.inscricao.unsubscribe();
   }

}
