import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IStock } from 'src/app/models/IStock';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private httpClient:HttpClient) { }

  public getStocks():Observable<IStock[]>{
    let dataUrl='https://gist.githubusercontent.com/hrk00007/798f572c45ae57c5e3f6d008edfaa117/raw/e13afa63b93d060d59366d22aec0b4110a475084/stocks.json';
    return this.httpClient.get<IStock[]>(dataUrl).pipe(
      retry(1),catchError(this.handleError)
    )
  }

  public handleError(error:HttpErrorResponse){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      //Client Error
      errorMessage=`Error: ${error.error.message}`
    }
    else{
      //Server Error
      errorMessage=`Status: ${error.status} \n Message: ${error.message}`
    }
    return throwError(()=>errorMessage)
  }
}
