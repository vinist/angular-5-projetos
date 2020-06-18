import {RouterModule, Routes} from '@angular/router';
import {ConversorRoutingComponent} from './conversor-routing.component';
import {NgModule} from '@angular/core';
import {ConversorComponent} from './components/conversor';

export const ConversorRoutes: Routes = [
  {
    path: 'conversor',
    component: ConversorRoutingComponent,
    children: [{
      path: '',
      component: ConversorComponent
    }]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(ConversorRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ConversorRoutingModule { }
