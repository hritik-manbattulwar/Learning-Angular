import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as customerActions from '../components/customers/actions/customer.actions';
import { CustomersService } from '../services/customers.service';
import { catchError, map, mergeMap, of } from 'rxjs';
@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomersService
  ) {}

  loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.loadCustomers),
      mergeMap(() =>
        this.customerService.loadCustomers().pipe(
          map((customers) =>
            customerActions.loadCustomersSuccess({ customers })
          ),
          catchError((error) =>
            of(customerActions.loadCustomersFailure({ error }))
          )
        )
      )
    );
  });

  /* loadCustomers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.loadCustomers),
      mergeMap(() =>
        this.customerService.loadCustomers().pipe(
          map((customers) =>
            customerActions.loadCustomersSuccess({ customers })
          ),
          catchError((error) =>
            of(customerActions.loadCustomersFailure({ error }))
          )
        )
      )
    );
  }); */
}
