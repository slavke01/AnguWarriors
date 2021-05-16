import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { User } from '../app.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  baseURL: string = "http://localhost:5000/";

  constructor(private http: HttpClient) { }



  registerUser(user:User):Observable<any>{

      const headers = { 'content-type': 'application/json'}
      const body = JSON.stringify(user);
      return this.http.post(this.baseURL+"api/register",body,{'headers':headers});
  }

}
