import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId=0;
  cantores:any[]=[];
  nome="";
  adicionado=false;
  adicionar(){
      this.adicionado=true;
      this.nome = this.nome
      this.cantores.push({
        id:++this.ultimoId,
        nome: this.nome
      });
  }


}

