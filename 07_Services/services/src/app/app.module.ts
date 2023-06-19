import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesCardComponent } from './components/employees-card/employees-card.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesCardComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
