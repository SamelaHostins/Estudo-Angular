import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent {

  @Input() valor: number = 0;

  /**variavel que é emissor de evento, esta classe permite passar evento.
   * quando queremos expor um evento ou um valor, usa o output
   */
 @Output() mudouValor = new EventEmitter()

  /**Queremos acessar o Input sem o ngModel, deste modo pode acessar
  *componentes tb, basta usar o decorator ViewChild e colocar no parametro
  o nome da variável que está no html fazendo refência
  */
  @ViewChild('campoInput') campoValorInput: ElementRef = new ElementRef({});

  incrementa(){
    this.campoValorInput. nativeElement.value ++;
    //this.valor ++;
    //toda vez que clicar emitirá o evento, ou seja mostrará o novo valor
    this.mudouValor.emit({novoValor:this.valor});
  }

  decrementa(){
    this.campoValorInput. nativeElement.value --;
    //this.valor --;
    //toda vez que clicar emitirá o evento, ou seja mostrará o novo valor
    this.mudouValor.emit({novoValor:this.valor});
  }

  constructor() {
   }

}
