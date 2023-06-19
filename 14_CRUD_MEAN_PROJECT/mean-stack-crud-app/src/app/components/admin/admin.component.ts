import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public products: Product[] = []
  public errorMessage: string = '';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    }, (error) => {
      this.errorMessage = error.message;
    })
  }
}
