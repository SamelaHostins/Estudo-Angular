import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  /**
   * Também pode chamar os inputs aqui, não é necessário usar
   * o decorator para cada um.
   * Pode colocar inputs: ['nomeCurso': nome]
   * coloca-se apenas os dois pontos se quiser colocar um nome
   * externo, se não quiser só dxar 'nomeCurso'
   */
})
export class InputPropertyComponent {

  /**Esse decorator faz com que consiga expor esta variavel em
   * em outro html quando chamra este componente. É possivel
   * colocar no parametro um "nome externo", ou seja, o nome
   * que está varioavel pode ser chamada externamente.
   * EX: @Input('nome') nomeCurso: string = '';
   * Desse modo pode chamar a varivel por [nome], além
   * ao inves de [nomeCurso]
  */
  @Input() nomeCurso: string = '';

  constructor() { }


}
