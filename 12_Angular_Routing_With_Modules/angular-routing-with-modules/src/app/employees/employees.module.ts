import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesDetailsComponent,
    EmployeesListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgxSpinnerModule
  ],
  providers: []
})
export class EmployeesModule { }
