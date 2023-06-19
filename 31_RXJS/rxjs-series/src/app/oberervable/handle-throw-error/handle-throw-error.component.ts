import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/IProduct';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-handle-throw-error',
  templateUrl: './handle-throw-error.component.html',
  styleUrls: ['./handle-throw-error.component.css']
})
export class HandleThrowErrorComponent implements OnInit {

  public fetching: boolean = false;
  public allProduct: IProduct[] = [];
  public errorMessage: string = ''

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.onGetProducts()
  }

  onGetProducts() {
    this.designUtilityService.getProducts().subscribe({
      next: (data) => {
        this.allProduct = data
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}


