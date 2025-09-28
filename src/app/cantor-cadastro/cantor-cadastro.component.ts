import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cantor-cadastro',
  templateUrl: './cantor-cadastro.component.html',
  styleUrls: ['./cantor-cadastro.component.css']
})
export class CantorCadastroComponent {
  salvar(cantorForm: NgForm) {
    console.log(cantorForm)
  }


}
