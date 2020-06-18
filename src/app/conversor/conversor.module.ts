import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConversorService, MoedaService} from './service';
import {HttpClientModule} from '@angular/common/http';
import {NumeroDirective} from './directives';
import {ConversorComponent} from './components/conversor';
import {ModalCotacaoComponent} from './components/modal-cotacao';
import {DataBrPipe} from './pipes';


@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    ConversorComponent,
  ],
  providers: [
    MoedaService,
    ConversorService,
  ],
})
export class ConversorModule { }
