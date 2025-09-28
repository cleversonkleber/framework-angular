import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cantor{
  nome:string="";
  pais:string="";
}

@Component({
  selector: 'app-cantor-cadastro',
  templateUrl: './cantor-cadastro.component.html',
  styleUrls: ['./cantor-cadastro.component.css']
})
export class CantorCadastroComponent {
  paises =['Brasil','Estados Unidos','Inglaterra','Irlanda','Porgual']
  paisPadrao:string= "Italia";

  cantor = new Cantor()
  salvar(cantorForm: NgForm) {
    this.cantor.nome =  cantorForm.value.nomeCantor;
    this.cantor.pais =  cantorForm.value.nomePais;

    console.log(cantorForm)
    // console.log(this.cantor)
  }


}
