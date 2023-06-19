import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'list', component: EmployeesListComponent },
  { path: 'list/:id', component: EmployeesDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
