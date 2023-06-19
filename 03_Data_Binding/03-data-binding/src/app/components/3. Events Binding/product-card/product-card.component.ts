import { Component } from '@angular/core';
import { IProduct } from './IProduct';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  public product: IProduct = {
    id: '004A5',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-40-alum-midnight-nc-se_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171038000%2C1661473982737',
    name: "Apple Watch",
    price: 1250,
    qty: 1
  }

  public incrQty() {
    this.product.qty = this.product.qty + 1;
  }
  public decrQty() {
    this.product.qty = this.product.qty - 1 < 1 ? 1 : this.product.qty - 1;
  }

}
