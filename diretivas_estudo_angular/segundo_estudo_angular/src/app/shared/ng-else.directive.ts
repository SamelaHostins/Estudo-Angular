//TemplateRef: faz referencia ao proprio template
//ViweContainerRef: faz referência ao conteudo que quer renderizar
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

//diretiva de estrutura
@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  /**ele é um atributo que recebe uma expressao, toda vez que
   * é modificado "set" este metodo é chamado e modifica o valor
   *  do template
   * */
  @Input () set ngElse(condition: boolean){
    if(!condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

}
