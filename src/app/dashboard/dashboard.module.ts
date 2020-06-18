import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../component';
import {DashboardService} from '../service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    DashboardService,
  ]
})
export class DashboardModule { }
