import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  public check: boolean = false;
  public isDeleted: boolean = false;
  public productId: string | any = '';
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.check = confirm("Are you sure you want to delete this Product");
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('id');
    })
    if (this.check) {
      this.productService.deleteProduct(this.productId).subscribe((data) => {
        this.isDeleted = true;
      }, (error) => {
        this.isDeleted = false;
      })

      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 3000)
    }
    else {
      this.router.navigate(['/admin']);
    }
  }
}
