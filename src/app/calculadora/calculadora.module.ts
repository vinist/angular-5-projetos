import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './components';
import {CalculadoraService} from './services';
import {CalculadoraRoutingModule} from './calculadora-routing.module';
import {CalculadoraRoutingComponent} from './calculadora-routing.component';

@NgModule({
  declarations: [
    CalculadoraComponent,
    CalculadoraRoutingComponent,
  ],
  exports: [
    CalculadoraComponent,
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
