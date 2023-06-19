import { createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../actions/customer.actions';
import { ICustomer } from '../models/ICustomer';

export const customerFeatureKey = 'customer';

export interface State {
  loading: boolean;
  customers: ICustomer[];
  errorMessage: string;
}

export const initialState: State = {
  loading: false,
  customers: [],
  errorMessage: '',
};

export const reducer = createReducer(
  initialState,
  on(CustomerActions.loadCustomers, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(CustomerActions.loadCustomersSuccess, (state, { customers }) => {
    return {
      ...state,
      loading: false,
      customers: customers,
    };
  }),
  on(CustomerActions.loadCustomersFailure, (state, { error }) => {
    return {
      ...state,
      loading: false,
      errorMessage: error,
    };
  })
);
