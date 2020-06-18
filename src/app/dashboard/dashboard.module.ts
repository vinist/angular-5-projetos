import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components';
import {DashboardService} from './service';
import {DashboardRoutingComponent} from './dashboard-routing.component';
import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [
    DashboardService,
  ]
})
export class DashboardModule { }
