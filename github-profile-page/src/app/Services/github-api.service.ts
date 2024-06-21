import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubAPIService {
  private apiURL = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/users/${username}`).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: any) {
    console.error('Произошла ошибка:', error);
    return throwError(error);
  }
}
