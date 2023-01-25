import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  // getProtectedApiResponse(): Observable<string> {
  //   // TODO - Need to check which API needs to be used for Asgardeo and change this to that.
  //   return this.http.get<any>('https://api.asgardeo.io/t/sanjula/oauth2/userinfo')
  //     .pipe(
  //       map(response => response.find((i: any) => i.type === 'iss').value),
  //       map(iss => '☁ API Success from ' + iss),
  //       catchError((e: HttpErrorResponse) => of(`🌩 API Error: ${e.status} ${e.statusText}`)),
  //     );
  // }
}
