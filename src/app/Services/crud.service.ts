import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Elementi, Incident, NalogRada, PlanRada } from '../app.module';
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


  createNalog(nalog:NalogRada):Observable<any>{

    const body = JSON.stringify(nalog);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createNalog',
      body,
      this.httpOptions
    );
  }

  createPlan(plan:PlanRada):Observable<any>{

    const body = JSON.stringify(plan);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createPlan',
      body,
      this.httpOptions
    );
  }

  createElement(element:Elementi):Observable<any>{
    const body = JSON.stringify(element);
    console.log(body);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createElement',
      body,
      this.httpOptions
    );
  }


  getIncidents(){

    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncidents',
      this.httpOptions);
  }
  getElements(){

    return this.http.get<any>(
      this.baseURL + 'api/crud/getElements',
      this.httpOptions);
  }

  getNalozi(){

    return this.http.get<NalogRada[]>(
      this.baseURL + 'api/crud/getNalozi',
      this.httpOptions);
  }
  
  getPlanovi(){
    return this.http.get<PlanRada[]>(
      this.baseURL + 'api/crud/getPlanovi',
      this.httpOptions);
  }


}


