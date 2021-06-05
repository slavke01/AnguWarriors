import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Elementi, Incident, NalogRada, PlanRada, SafetyDoc } from '../app.module';
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

  createSafetyDocument(sd:SafetyDoc):Observable<any>{

    const body = JSON.stringify(sd);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createSafetyDocument',
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

  getIncident(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncident/'+id,
      this.httpOptions);
  }

  getSafetyDoc(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSafety/'+id,
      this.httpOptions);
  }

  getSafetyDocuments(){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSafetyDocuments',
      this.httpOptions);
  }

  updateIncident(incident:Incident){
    const body = JSON.stringify(incident);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updateIncident',
      body,
      this.httpOptions
    );
  }
  updateSafetyDoc(sd:SafetyDoc){
    const body = JSON.stringify(sd);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updateSafety',
      body,
      this.httpOptions
    );
  }
  getPlan(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getPlan/'+id,
      this.httpOptions);

  }
  updatePlan(plan:PlanRada){
    const body = JSON.stringify(plan);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updatePlan',
      body,
      this.httpOptions
    );
  }
  getNalog(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getNalog/'+id,
      this.httpOptions);

  }

  getIncidentChanges(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncidentChanges/'+id,
      this.httpOptions);
  }

  getNalogChanges(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getWorkChanges/'+id,
      this.httpOptions);
  }
  getPlanChanges(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getPlanChanges/'+id,
      this.httpOptions);
  }

  getSafetyChanges(id:string){
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSafetyChanges/'+id,
      this.httpOptions);
  }
  updateNalog(nalog:NalogRada){
    const body = JSON.stringify(nalog);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updateNalog',
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

  getAllByUsername(){

    return this.http.get<any>(
      this.baseURL + 'api/crud/getAllByUsername',
      this.httpOptions);
  }

  getIncidentsForChart(){

    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncidentsByDate',
      this.httpOptions);
  }

  getNalozi(){

    return this.http.get<NalogRada[]>(
      this.baseURL + 'api/crud/getNalozi',
      this.httpOptions);
  }

  getNumber(){
    return this.http.get<number[]>(
      this.baseURL + 'api/crud/getNumberIncidents',
      this.httpOptions);
  }

  deleteIncident(id:string){
    
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteIncident/'+id,
      this.httpOptions);
  }

  deleteSafetyDoc(id:string){
    
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteSafetyDoc/'+id,
      this.httpOptions);
  }


  deleteNalogRada(id:string){
    
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteNalog/'+id,
      this.httpOptions);
  }
  deletePlanRada(id:string){
    
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteSwitching/'+id,
      this.httpOptions);
  }
  getPlanovi(){
    return this.http.get<PlanRada[]>(
      this.baseURL + 'api/crud/getPlanovi',
      this.httpOptions);
  }


}


