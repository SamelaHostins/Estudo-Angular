import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  inscricao: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private service: AlunosService,
    private router: Router
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

   editarContato(){
    this.router.navigate(['/alunos', 'this.aluno.id', 'editar']);
   }
}
