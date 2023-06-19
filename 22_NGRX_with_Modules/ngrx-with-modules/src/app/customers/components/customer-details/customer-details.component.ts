import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { State } from '../../../reducers';
import { ICustomer } from '../../models/ICustomer';
import * as customerReducer from '../../reducers/customer.reducer';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent {
  public selectedCustomer: ICustomer | any;
  public customerId: string | any = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.customerId = param.get('id');
    });

    // get data from NGRX Store
    this.store
      .pipe(select(customerReducer.customerFeatureKey))
      .subscribe((state) => {
        this.selectedCustomer = state.customers.find((customer) => {
          return customer.eid === this.customerId;
        });
      });
  }
}
