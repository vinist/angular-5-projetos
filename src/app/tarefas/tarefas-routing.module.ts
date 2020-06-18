import {RouterModule, Routes} from '@angular/router';
import {ListarTarefaComponent} from './listar';
import {CadastrarTarefasComponent} from './cadastrar';
import {EditarTarefaComponent} from './editar';
import {NgModule} from '@angular/core';
import {TarefasRoutingComponent} from './tarefas-routing.component';


export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    component: TarefasRoutingComponent,
    children: [
      {
        path: '',
        component: ListarTarefaComponent
      },
      {
        path: 'cadastrar',
        component: CadastrarTarefasComponent
      },
      {
        path: 'editar/:id',
        component: EditarTarefaComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TarefaRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class TarefasRoutingModule { }
