import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ICustomer } from 'src/app/models/ICustomer';
import { State } from 'src/app/reducers';
import { CustomersService } from 'src/app/services/customers.service';
import * as customerReducer from './reducers/customer.reducer';
import * as customerActions from './actions/customer.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  public customers: ICustomer[] = [];
  public errorMessage: string = '';
  public loading: boolean = false;
  public spinner: string = '../../../assets/img/spinner.gif';
  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    // dispatch an action to load customers from server
    this.store.dispatch(customerActions.loadCustomers());
    this.store
      .pipe(select(customerReducer.customerFeatureKey))
      .subscribe((state) => {
        this.customers = state.customers;
        this.errorMessage = state.errorMessage;
        this.loading = state.loading;
      });
  }
}
