import { NgModule } from '@angular/core';
//Arquivo com as rotas da aplicação
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
 {path: 'login', component: LoginComponent},
 {path: '', component: HomeComponent}
];

//arquivo que representa um modulo de rotas
//for.Root = rota raiz
//for.Child = rota de funcionalidade
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
