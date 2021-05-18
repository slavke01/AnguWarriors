import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../app.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  baseURL: string = 'https://localhost:44370/';

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json",'Access-Control-Allow-Origin' : '*' }),
    };
    const body = JSON.stringify(user);
    return this.http.post<any>(
      this.baseURL + 'api/register',
      body,
      httpOptions
    );
  }
}
