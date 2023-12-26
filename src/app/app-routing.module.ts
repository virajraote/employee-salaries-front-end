import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmployeesComponent } from './component/employees/employees.component';
import { ChartComponent } from './component/chart/chart.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'employee', component:EmployeesComponent},
  { path: 'chart', component:ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
