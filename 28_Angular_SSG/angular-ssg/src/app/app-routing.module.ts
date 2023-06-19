import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';
import { StockComponent } from './components/stock/stock.component';
import { StockDetailsComponent } from './components/stock-details/stock-details.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:id', component: EmployeesDetailsComponent },
  { path: 'stocks', component: StockComponent },
  { path: 'stocks/:name', component: StockDetailsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
