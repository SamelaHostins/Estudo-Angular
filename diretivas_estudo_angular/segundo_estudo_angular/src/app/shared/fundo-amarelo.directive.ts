import { Directive, ElementRef, Renderer2 } from '@angular/core';

//Trata-se de uma Diretiva agora
@Directive({
  /** Se  uiser definir a diretiva para algo específico basta colocar a tag
  dela antes, ex: quero que o fundo amarelo esteja em paragrafos, entao antes
  do nome do selector coloca "p", se quiser q seja apenas a botão, coloca "button"
  se quiser q seja a componentes q criamos, só colcoar o nome da tag.
  */
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
    ) {
 // console.log(this.elementRef);
 //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
this.renderer.setStyle(
  this.elementRef.nativeElement,
  'background-color',
  'yellow'
   );
  }
}
