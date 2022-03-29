import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';
import { ClientComponent } from './client/client.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { EmployeesComponent } from './employees/employees.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Dashboard', component: DashboardComponent },
  {
    path: '', component: CommonLayoutComponent,
    children: [
      { path: '', component: EmployeesComponent },
      {
        path: 'Employees', component: EmployeesComponent,
      },
      {
        path: 'Client', component: ClientComponent
      },
      { path: 'CardView', component: CardViewComponent },
      
      { path: 'DynamicCard',component:DynamicCardComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
