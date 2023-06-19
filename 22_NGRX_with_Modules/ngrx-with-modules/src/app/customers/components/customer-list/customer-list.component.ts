import { Component } from '@angular/core';
import { ICustomer } from '../../models/ICustomer';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import * as customerActions from '../../actions/customer.actions';
import * as customerReducer from '../../reducers/customer.reducer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent {
  public customers: ICustomer[] = [];
  public loading: boolean = false;
  public errorMessage: string = '';
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    // dispatch an action
    this.store.dispatch(customerActions.loadCustomers());

    // get data from the NGRX store
    this.store
      .pipe(select(customerReducer.customerFeatureKey))
      .subscribe((state) => {
        this.customers = state.customers;
        this.errorMessage = state.errorMessage;
        this.loading = state.loading;
      });
  }
}
