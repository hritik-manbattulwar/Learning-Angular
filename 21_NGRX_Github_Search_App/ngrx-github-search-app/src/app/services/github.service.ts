import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry, catchError, throwError } from 'rxjs';
import { IProfile } from '../models/IProfile';
import { CLIENT_ID, CLIENT_SECRET } from '../crendentials/githubCrendentials';
import { IRepos } from '../models/IRepos';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private httpClient: HttpClient) {}

  public getProfileData(githubUser: string): Observable<IProfile> {
    let dataURL: string = `https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient
      .get<IProfile>(dataURL)
      .pipe(retry(1), catchError(this.handleError));
  }
  public getReposData(githubUser: string): Observable<IRepos[]> {
    let dataURL: string = `https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient
      .get<IRepos[]>(dataURL)
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
