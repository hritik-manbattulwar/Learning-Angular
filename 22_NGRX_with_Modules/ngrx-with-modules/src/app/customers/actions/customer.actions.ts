import { createAction, props } from '@ngrx/store';
import { ICustomer } from '../models/ICustomer';

export const loadCustomers = createAction('[Customer] Load Customers');

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ customers: ICustomer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: string }>()
);
