import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class Service {
  environment = environment;
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
   })

  constructor(private http: HttpClient) {}

  test(): Observable<any> {
    return this.http.get(`${this.environment.backEndUrl}/`, { headers: this.headers });
  }

}