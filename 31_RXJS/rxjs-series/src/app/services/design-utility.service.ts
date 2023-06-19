import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, retry, throwError, catchError } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  public hello = new Subject<boolean>;
  public username = new BehaviorSubject<string>('Hritik');
  constructor(private httpClient: HttpClient) { }

  public addVideo(val: any, containerId: string) {
    let li = document.createElement('li')
    li.innerText = val;
    document.getElementById(containerId)?.appendChild(li)
  }

  public getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>('http://127.0.0.1:5000/product/men').pipe(
      retry(1), catchError(this.handleError)
    )
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
