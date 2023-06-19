import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './root/components/home/home.component';
import { AboutComponent } from './root/components/about/about.component';
import { ContactComponent } from './root/components/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, { path: 'stocks', loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule) }, { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
