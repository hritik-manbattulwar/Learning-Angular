import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { HobbySelectorCheckboxComponent } from './components/hobby-selector-checkbox/hobby-selector-checkbox.component';
import { HobbySelectorRadioComponent } from './components/hobby-selector-radio/hobby-selector-radio.component';
import { EmployeesCardComponent } from './components/employees-card/employees-card.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthCardComponent,
    HobbySelectorCheckboxComponent,
    HobbySelectorRadioComponent,
    EmployeesCardComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
