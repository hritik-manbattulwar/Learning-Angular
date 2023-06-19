import { Component, OnInit } from '@angular/core';
import * as productReducer from './product-card-reducers'
import { Store, select } from '@ngrx/store';
import { decrQty, incrQty } from './product-card-actions';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  public productInfo: productReducer.State | any;

  constructor(private store: Store<{ [productReducer.productFeatureKey]: productReducer.State }>) { }

  ngOnInit(): void {
    this.store.pipe(select('productItem')).subscribe((data) => {
      this.productInfo = data;
    })
  }

  public clickIncrQty() {
    this.store.dispatch(incrQty());
  }

  public clickDecrQty() {
    this.store.dispatch(decrQty());
  }
}
