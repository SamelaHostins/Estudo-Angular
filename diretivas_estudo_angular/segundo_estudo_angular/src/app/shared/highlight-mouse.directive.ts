import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  //anotação + evento a executar + definir um nome para o método
  //Quando o mouse passa em cima, fica da cor bisque
  @HostListener('mouseenter') onMouseOver(){
   /*  this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'bisque'
    );*/
    this.backgroundColor = 'bisque';
  }

  //Quando o mouse sai de cima fica da cor branca
  @HostListener('mouseleave') onMouseLeave(){
    /* this.renderer.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'white'
    );*/
    this.backgroundColor = 'white';
  }

  /*anotação + elemento que quer fazer referência, pode ser um selector, o nome de uma classe
   * + uma variavel
   */
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  constructor(
   /*  private elementRef: ElementRef,
    private renderer: Renderer2*/
  ) {

   }

}
