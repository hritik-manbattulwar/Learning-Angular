import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers'
import * as productReducer from './reducers/product-item.reducer';
import * as productActions from './actions/product-item.actions';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  public product: any;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(productReducer.productItemFeatureKey)).subscribe((state) => {
      this.product = state;
    })
  }

  public clickIncrQty() {
    this.store.dispatch(productActions.incrQty());
  }

  public clickDecrQty() {
    this.store.dispatch(productActions.decrQty());
  }
}
