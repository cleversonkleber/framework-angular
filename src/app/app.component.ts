import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome="";
  nomeInserido=""
  numero=0;
  adicionar(){
    // this.nomeInserido = nome;
    this.numero ++;
    this.nome = 'Klebor ' + this.numero;
   
  }


}

