import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { IEmployee } from 'src/app/models/ICustomer';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private httpClient: HttpClient) {}

  public fetchAllEmployees(): Observable<IEmployee[]> {
    let dataUrl: string =
      'https://gist.githubusercontent.com/hrk00007/d22d87776653bc2a8c57ccf1d8a1382f/raw/53a399f2faf4c0be0d551624c85a7cb93243ca2b/Contact-List.json';

    return this.httpClient
      .get<IEmployee[]>(dataUrl)
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
    // return throwError(errorMessage); //deprecated
    return throwError(() => errorMessage);
  }
}
