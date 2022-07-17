import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';


@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],

  providers:[AlunosService]
})

export class AlunosModule { }
