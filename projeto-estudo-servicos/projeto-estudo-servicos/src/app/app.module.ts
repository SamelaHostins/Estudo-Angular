import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './servicos/cursos/cursos.service';
import { CursosModule } from './servicos/cursos/cursos.module';
import { CriarCursoModule } from './servicos/criar-curso/criar-curso.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [CursosService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
