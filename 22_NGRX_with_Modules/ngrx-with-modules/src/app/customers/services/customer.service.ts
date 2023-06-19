import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICustomer } from '../models/ICustomer';
import { Observable, retry, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}
  //load Customers
  public loadCustomers(): Observable<ICustomer[]> {
    let dataURL =
      'https://gist.githubusercontent.com/hrk00007/edeedf11c97c02976936fa7b7a4d478e/raw/d4bddf1a2f07d5336d6da0a276f856754b7758c5/employees.json';
    return this.httpClient
      .get<ICustomer[]>(dataURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client Error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }
}
