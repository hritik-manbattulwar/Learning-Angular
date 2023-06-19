import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Product } from 'src/app/models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    let dataUrl = 'http://127.0.0.1:3000/api/products'
    return this.httpClient.get<Product[]>(dataUrl).pipe(
      retry(1), catchError(this.handleError)
    )
  }
  public getSingleProduct(productId: string): Observable<Product> {
    let dataUrl = `http://127.0.0.1:3000/api/product/${productId}`
    return this.httpClient.get<Product>(dataUrl).pipe(
      retry(1), catchError(this.handleError)
    )
  }
  public createproduct(product: Product): Observable<{ message: string, product: Product }> {
    let dataUrl = 'http://127.0.0.1:3000/api/product'
    return this.httpClient.post<{ message: string, product: Product }>(dataUrl, product).pipe(
      retry(1), catchError(this.handleError)
    )
  }
  public updateProduct(productId: string, product: Product): Observable<{ message: string, product: Product }> {
    let dataUrl = `http://127.0.0.1:3000/api/product/${productId}`
    return this.httpClient.put<{ message: string, product: Product }>(dataUrl, product).pipe(
      retry(1), catchError(this.handleError)
    )
  }
  public deleteProduct(productId: string): Observable<{ message: string }> {
    let dataUrl = `http://127.0.0.1:3000/api/product/${productId}`
    return this.httpClient.delete<{ message: string }>(dataUrl).pipe(
      retry(1), catchError(this.handleError)
    )
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client Error
      errorMessage = `Error : ${error.error.message}`
    }
    else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
