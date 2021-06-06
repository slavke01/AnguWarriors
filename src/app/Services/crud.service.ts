import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  Call,
  EkipaDTO,
  Elementi,
  Incident,
  NalogRada,
  PlanRada,
  Poruka,
  Resolution,
  SafetyDoc,
} from '../app.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CRUDService {
  baseURL: string = 'https://localhost:44370/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  createIncident(incident: Incident): Observable<any> {
    const body = JSON.stringify(incident);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createIncident',
      body,
      this.httpOptions
    );
  }

  createSafetyDocument(sd: SafetyDoc): Observable<any> {
    const body = JSON.stringify(sd);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createSafetyDocument',
      body,
      this.httpOptions
    );
  }

  createNalog(nalog: NalogRada): Observable<any> {
    const body = JSON.stringify(nalog);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createNalog',
      body,
      this.httpOptions
    );
  }

  createCall(poziv: Call): Observable<any> {
    const body = JSON.stringify(poziv);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createPoziv',
      body,
      this.httpOptions
    );
  }

  createPlan(plan: PlanRada): Observable<any> {
    const body = JSON.stringify(plan);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createPlan',
      body,
      this.httpOptions
    );
  }

  createElement(element: Elementi): Observable<any> {
    const body = JSON.stringify(element);
    console.log(body);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createElement',
      body,
      this.httpOptions
    );
  }


  makeNotificatioRead(id: string): Observable<any> {
    const body = JSON.stringify(id);
    return this.http.post<any>(
      this.baseURL + 'api/crud/makeNotificationRead/'+id,
      this.httpOptions
    );
  }

  getIncident(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncident/' + id,
      this.httpOptions
    );
  }

  getCalls() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getPozive',
      this.httpOptions
    );
  }

  getReadNotifications(usrnm:string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getReadNotificationsByUsername/'+usrnm,
      this.httpOptions
    );
  }

  getUnreadNotifications(usrnm:string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getUnreadNotificationsByUsername/'+usrnm,
      this.httpOptions
    );
  }

  

  getSuccessNotifications(usrnm:string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSuccessNotificationsByUsername/'+usrnm,
      this.httpOptions
    );
  }

  getErrorNotifications(usrnm:string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getErrorNotificationsByUsername/'+usrnm,
      this.httpOptions
    );
  }

  createCrew(crew: EkipaDTO) {
    const body = JSON.stringify(crew);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createCrew',
      body,
      this.httpOptions
    );
  }

 
  createResolution(res: Resolution) {
    const body = JSON.stringify(res);
    console.log(res);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createResolution',
      body,
      this.httpOptions
    );
  }
  getCrews() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getCrews',
      this.httpOptions
    );
  }
  getSearch(id:string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/search/'+id,
      this.httpOptions
    );
  }
  getFreeCrewMembers() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getFreeCrewMembers',
      this.httpOptions
    );
  }
  getSafetyDoc(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSafety/' + id,
      this.httpOptions
    );
  }

  getSafetyDocuments() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSafetyDocuments',
      this.httpOptions
    );
  }

  updateIncident(incident: Incident) {
    const body = JSON.stringify(incident);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updateIncident',
      body,
      this.httpOptions
    );
  }
  updateSafetyDoc(sd: SafetyDoc) {
    const body = JSON.stringify(sd);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updateSafety',
      body,
      this.httpOptions
    );
  }
  getPlan(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getPlan/' + id,
      this.httpOptions
    );
  }
  updatePlan(plan: PlanRada) {
    const body = JSON.stringify(plan);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updatePlan',
      body,
      this.httpOptions
    );
  }
  getNalog(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getNalog/' + id,
      this.httpOptions
    );
  }

  getIncidentChanges(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncidentChanges/' + id,
      this.httpOptions
    );
  }

  getNalogChanges(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getWorkChanges/' + id,
      this.httpOptions
    );
  }
  getPlanChanges(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getPlanChanges/' + id,
      this.httpOptions
    );
  }

  getSafetyChanges(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getSafetyChanges/' + id,
      this.httpOptions
    );
  }
  updateNalog(nalog: NalogRada) {
    const body = JSON.stringify(nalog);
    return this.http.post<any>(
      this.baseURL + 'api/crud/updateNalog',
      body,
      this.httpOptions
    );
  }
  getIncidents() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncidents',
      this.httpOptions
    );
  }
  getElements() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getElements',
      this.httpOptions
    );
  }

  getAllByUsername() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getAllByUsername',
      this.httpOptions
    );
  }

  getIncidentsForChart() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getIncidentsByDate',
      this.httpOptions
    );
  }

  getNalozi() {
    return this.http.get<NalogRada[]>(
      this.baseURL + 'api/crud/getNalozi',
      this.httpOptions
    );
  }

  getNumber() {
    return this.http.get<number[]>(
      this.baseURL + 'api/crud/getNumberIncidents',
      this.httpOptions
    );
  }
  deleteCrew(id: string) {
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteCrew/' + id,
      this.httpOptions
    );
  }
  deleteIncident(id: string) {
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteIncident/' + id,
      this.httpOptions
    );
  }

  deleteDevice(id: string) {
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteDevice/' + id,
      this.httpOptions
    );
  }

  createMessage(poruka:Poruka){

    const body = JSON.stringify(poruka);
    console.log(body);
    return this.http.post<any>(
      this.baseURL + 'api/crud/createMessage',
      body,
      this.httpOptions
    );


  }
  deleteSafetyDoc(id: string) {
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteSafetyDoc/' + id,
      this.httpOptions
    );
  }

  deleteNalogRada(id: string) {
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteNalog/' + id,
      this.httpOptions
    );
  }
  deletePlanRada(id: string) {
    return this.http.post<any>(
      this.baseURL + 'api/crud/deleteSwitching/' + id,
      this.httpOptions
    );
  }
  getPlanovi() {
    return this.http.get<PlanRada[]>(
      this.baseURL + 'api/crud/getPlanovi',
      this.httpOptions
    );
  }

  getCrewMembers(id: string) {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getCrewMembers/' + id,
      this.httpOptions
    );
  }

  getAllCallers() {
    return this.http.get<any>(
      this.baseURL + 'api/crud/getAllCallers',
      this.httpOptions
    );
  }
}
