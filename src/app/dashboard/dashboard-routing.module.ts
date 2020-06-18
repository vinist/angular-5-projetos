import {RouterModule, Routes} from '@angular/router';
import {DashboardRoutingComponent} from './dashboard-routing.component';
import {NgModule} from '@angular/core';
import {DashboardComponent} from './components';

export const DashboardRoutes: Routes = [
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
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class DashboardRoutingModule { }
