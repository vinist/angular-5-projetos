import {RouterModule, Routes} from '@angular/router';
import {JogoDaVelhaRoutingComponent} from './jogo-da-velha-routing.component';
import {NgModule} from '@angular/core';
import {JogoDaVelhaComponent} from './jogo-da-velha.component';

export const JogoDaVelhaRoutes: Routes = [
  {
    path: 'jogo-da-velha',
    component: JogoDaVelhaRoutingComponent,
    children: [{
      path: '',
      component: JogoDaVelhaComponent
    }]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(JogoDaVelhaRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class JogoDaVelhaRoutingModule { }
