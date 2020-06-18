import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TarefaService, TarefaConcluidaDirective} from './shared';
import {ListarTarefaComponent} from './listar';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CadastrarTarefasComponent} from './cadastrar';
import {EditarTarefaComponent} from './editar';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefasComponent, EditarTarefaComponent, TarefaConcluidaDirective],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [TarefaService]
})
export class TarefasModule {

}

