import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';



const alunosRoutes: Routes = [
 {path: 'alunos', component: AlunosComponent, children:
 [
  {path: 'novo', component: AlunoFormComponent},
  {path: ':id', component: AlunoDetalheComponent},
  {path: ':id/editar', component: AlunoFormComponent}
 ]}
];

//for.Child = rota de funcionalidade
export const routing: ModuleWithProviders<any> = RouterModule.forChild(alunosRoutes);

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule] //para ter acesso as rotas
})
export class AlunosRoutingModule { }
