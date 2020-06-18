import {RouterModule, Routes} from '@angular/router';
import {DashboardRoutingComponent} from './dashboard-routing.component';
import {DashboardComponent} from '../dashboard/components';
import {NgModule} from '@angular/core';

export const DashboarRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardRoutingComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(DashboarRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule { }
