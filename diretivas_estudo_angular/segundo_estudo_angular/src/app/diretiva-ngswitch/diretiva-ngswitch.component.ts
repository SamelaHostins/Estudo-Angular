import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngswitch',
  templateUrl: './diretiva-ngswitch.component.html',
  styleUrls: ['./diretiva-ngswitch.component.css']
})
export class DiretivaNgswitchComponent  {

  //Vai mostrar qual aba está sendo pedida pelo usuário
  aba: string = 'home';

  constructor() { }


}
