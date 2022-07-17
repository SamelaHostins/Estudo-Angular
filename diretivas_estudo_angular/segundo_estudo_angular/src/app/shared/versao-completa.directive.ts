
import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appVersaoCompleta]'
})
export class VersaoCompletaDirective implements OnInit{

  @HostListener('mouseenter') onMouseOver(){
     this.backgroundColor = this.highlightColor;
   }

   @HostListener('mouseleave') onMouseLeave(){
     this.backgroundColor = this.defaultColor;
   }

   @HostBinding('style.backgroundColor') backgroundColor: string = '';

   @Input() defaultColor: string = 'white';
   @Input('appVersaoCompleta') highlightColor: string = 'bisque';

  constructor() { }

  //será executado quando o componente é inicializado
   ngOnInit(){
    this.backgroundColor = this.defaultColor;
   }

}
