import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';


const cursosRoutes: Routes = [
 {path: 'cursos', component: CursosComponent},
 {path: 'cursos/:id', component: CursoDetalheComponent},
 {path: 'naoEncontrado', component: CursoNaoEncontradoComponent}
]

//for.Child = rota de funcionalidade
export const routing: ModuleWithProviders<any> = RouterModule.forChild(cursosRoutes);

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
