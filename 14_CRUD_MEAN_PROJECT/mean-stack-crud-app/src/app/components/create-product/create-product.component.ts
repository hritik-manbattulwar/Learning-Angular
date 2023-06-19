import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public product: Product = {
    _id: '',
    name: '',
    image: '',
    price: null,
    qty: null,
    info: ''
  }
  public imageFileName: any;
  public isApiFailed: Boolean | any;
  public successMessage: string = '';
  public emptyFields: boolean | any;
  public isSubmitted: boolean | any;

  constructor(private productService: ProductsService, private router: Router) { }

  // selectProductImage
  public selectProductImage(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      this.imageFileName = file;
      reader.addEventListener('load', () => {
        return reader.result ? this.product.image = String(reader.result) : '';
      });
    }
  }

  //after submitting the from
  public submitCreateProduct(createForm: any) {
    if (createForm.form.status === "VALID" && this.product.image !== '') {
      this.emptyFields = false;
      this.productService.createproduct(this.product).subscribe((data) => {
        this.successMessage = data.message;
        // console.log(data)
        this.isSubmitted = true;
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 3000)
      }, (error) => {
        this.isApiFailed = true;
        this.isSubmitted = false;
      })
    }
    else {
      this.emptyFields = true;
      this.isSubmitted = false;
      setTimeout(() => {
        this.emptyFields = false;
      }, 3000)
    }
  }
}
