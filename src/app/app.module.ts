import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CantoresPesquisaComponent } from './cantores-pesquisa/cantores-pesquisa.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CantorCadastroComponent } from './cantor-cadastro/cantor-cadastro.component';
import { InputColorDirective } from './input-color.directive';


@NgModule({
  declarations: [
    AppComponent,
    CantoresPesquisaComponent,
    NavbarComponent,
    CantorCadastroComponent,
    InputColorDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
