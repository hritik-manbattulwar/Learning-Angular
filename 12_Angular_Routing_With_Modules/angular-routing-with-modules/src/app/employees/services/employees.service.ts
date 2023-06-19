import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IEmployee } from '../models/IEmployee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

  public getEmployees(): Observable<IEmployee[]> {
    let dataUrl = 'https://gist.githubusercontent.com/hrk00007/edeedf11c97c02976936fa7b7a4d478e/raw/d4bddf1a2f07d5336d6da0a276f856754b7758c5/employees.json'
    return this.httpClient.get<IEmployee[]>(dataUrl).pipe(
      retry(1), catchError(this.handleError)
    )
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //Client Error
      errorMessage = `Error: ${error.error.message}`
    }
    else {
      //Server Error
      errorMessage = `Status: ${error.status} \n Message: ${error.message}`
    }
    return throwError(() => errorMessage)
  }
}
