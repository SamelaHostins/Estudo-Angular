import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0;
  //tipo inscrição
  inscricao: Subscription = new Subscription();

  curso: any;

  constructor(
    private route: ActivatedRoute,
    private service: CursosService,
    private router: Router
    ) {
   }

   //executa quando a classe é inicializada
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
       this.id = params['id'];

       //se o id do curso existir
       this.curso = this.service.getCursoById(this.id);

       //se o id do curso não existir
       if(this.curso == null){
        this.router.navigate(['/naoEncontrado']);
       }
      }
    );
  }

  /**mesmo que depois a classe ser destruida a inscrição pode continuar
  e não há interesse em manter inscrito, por isso por boa prática,
  é bom ter um método para desinscrever
  */
  ngOnDestroy()  {
   this.inscricao.unsubscribe();
  }

}
