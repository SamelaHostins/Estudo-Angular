import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceberCursoCriadoComponent } from './../receber-curso-criado/receber-curso-criado.component';
import { CriarCursoComponent } from './criar-curso.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  //tem que exportar para o outro modulo
  exports: [
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
