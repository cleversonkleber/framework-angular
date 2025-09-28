import { Component } from '@angular/core';

@Component({
  selector: 'app-cantor-cadastro',
  templateUrl: './cantor-cadastro.component.html',
  styleUrls: ['./cantor-cadastro.component.css']
})
export class CantorCadastroComponent {
  nome = "Cleverson";
  dataCadastro= new Date(2022, 8,15);
  valor = 1350.45;
  valor2=0.3578;

}
