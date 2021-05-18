import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Incident } from '../app.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  baseURL: string = 'https://localhost:44370/';
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json",'Access-Control-Allow-Origin' : '*' }),
  };
  constructor(private http:HttpClient) { }

  createIncident(incident:Incident):Observable<any>{

    const body = JSON.stringify(incident);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createIncident',
      body,
      this.httpOptions
    );
  }





}


