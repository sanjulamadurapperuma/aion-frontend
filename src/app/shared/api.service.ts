import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }
}
