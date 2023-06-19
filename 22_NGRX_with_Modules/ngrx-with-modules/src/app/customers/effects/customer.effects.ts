import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as customerActions from '../actions/customer.actions';
import { CustomerService } from '../services/customer.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class CustomerEffects {
  constructor(
    private actions$: Actions,
    private customerService: CustomerService
  ) {}

  $loadCustomers = createEffect(() => {
    return this.actions$.pipe(
      ofType(customerActions.loadCustomers),
      mergeMap((action) =>
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
}
