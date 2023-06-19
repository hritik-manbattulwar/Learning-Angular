import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from 'src/app/models/IProduct';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  public product: Product = {
    _id: '',
    name: '',
    image: '',
    price: null,
    qty: null,
    info: ''
  }
  public productId: string | any;
  public isSubmitted: boolean = false;
  public isApiFailed: boolean = false;
  public emptyFields: boolean = false;
  public imageFileName: string = '';
  public successMessage: string = '';

  constructor(private productService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) { }


  // selectProductImage
  public selectProductImage(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      //this.imageFileName = file;
      reader.addEventListener('load', () => {
        return reader.result ? this.product.image = String(reader.result) : '';
      });
    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.productId = param.get('id');
    })
    this.productService.getSingleProduct(this.productId).subscribe((data) => {
      this.product = data;
    }, (error) => {
      console.log(error)
    })
  }

  public submitUpdateProduct(updateForm: any) {
    if (updateForm.form.status === "VALID" && this.product.image !== '') {
      this.emptyFields = false;
      this.productService.updateProduct(this.productId, this.product).subscribe((data) => {
        this.successMessage = data.message;
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
