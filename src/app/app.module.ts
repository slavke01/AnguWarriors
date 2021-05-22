import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegCompComponent } from './reg-comp/reg-comp.component';
import { IncidentNewComponent } from './incident-new/incident-new.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { DashboardCompComponent } from './dashboard-comp/dashboard-comp.component';
import { IncidentsCompComponent } from './incidents-comp/incidents-comp.component';
import { NewIncidentCompComponent } from './new-incident-comp/new-incident-comp.component';
import { NewDevicesCompComponent } from './new-devices-comp/new-devices-comp.component';
import { IncidentResolutionCompComponent } from './incident-resolution-comp/incident-resolution-comp.component';
import { IncidentCallsCompComponent } from './incident-calls-comp/incident-calls-comp.component';
import { IncidentCrewCompComponent } from './incident-crew-comp/incident-crew-comp.component';
import { IncidentMultimediaCompComponent } from './incident-multimedia-comp/incident-multimedia-comp.component';
import { IncidentEquipmentCompComponent } from './incident-equipment-comp/incident-equipment-comp.component';
import { NewCallCompComponent } from './new-call-comp/new-call-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NewCallDialogTableComponent } from './new-call-dialog-table/new-call-dialog-table.component';
import { NotificationsMenuCompComponent } from './notifications-menu-comp/notifications-menu-comp.component';
import { Notifications3CompComponent } from './notifications3-comp/notifications3-comp.component';
import { SettingsCompComponent } from './settings-comp/settings-comp.component';
import { WorkRequestCompComponent } from './work-request-comp/work-request-comp.component';
import { NewWorkRequestComponent } from './new-work-request/new-work-request.component';
import { BasicInformationWorkRequestComponent } from './basic-information-work-request/basic-information-work-request.component';
import { StateChangesHistoryRequestComponent } from './state-changes-history-request/state-changes-history-request.component';
import { MultimediaAttachmentsNewRequestComponent } from './multimedia-attachments-new-request/multimedia-attachments-new-request.component';
import { EquipmentNewRequestComponent } from './equipment-new-request/equipment-new-request.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MapComponentComponent } from './map-component/map-component.component';
import { MatInputModule } from "@angular/material/input"
import {MatIconModule} from "@angular/material/icon"
import {ReactiveFormsModule} from "@angular/forms"
import { AuthentificationService} from "./Services/authentification.service"
import { CRUDService } from "./Services/crud.service"
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    RegCompComponent,
    IncidentNewComponent,
    SideBarComponent,
    DashboardCompComponent,
    IncidentsCompComponent,
    NewIncidentCompComponent,
    NewDevicesCompComponent,
    IncidentResolutionCompComponent,
    IncidentCallsCompComponent,
    IncidentCrewCompComponent,
    IncidentMultimediaCompComponent,
    IncidentEquipmentCompComponent,
    NewCallCompComponent,
    NotificationsMenuCompComponent,
    Notifications3CompComponent,
    SettingsCompComponent,
    WorkRequestCompComponent,
    NewWorkRequestComponent,
    BasicInformationWorkRequestComponent,
    StateChangesHistoryRequestComponent,
    MultimediaAttachmentsNewRequestComponent,
    EquipmentNewRequestComponent,
    NewCallDialogTableComponent,
    MapComponentComponent
  ],
  entryComponents: [NewCallDialogTableComponent],
  exports: [MatTableModule, MatFormFieldModule, MatPaginatorModule,MatInputModule,MatIconModule],

  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    ChartsModule,
    WavesModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginCompComponent,
      },
      {
        path: 'register',
        component: RegCompComponent,
      },
      {
        path: 'incidents',
        component: IncidentsCompComponent,
      },
      {
        path: 'home',
        component: DashboardCompComponent,
      },
      {
        path: 'new',
        component: NewIncidentCompComponent,
        children: [
          {
            path: '',
            component: IncidentNewComponent,
          },
          {
            path: 'devices',
            component: NewDevicesCompComponent,
          },
          {
            path: 'resolution',
            component: IncidentResolutionCompComponent,
          },
          {
            path: 'calls',
            component: IncidentCallsCompComponent,
          },
          {
            path: 'crew',
            component: IncidentCrewCompComponent,
          },
          {
            path: 'multimedia',
            component: IncidentMultimediaCompComponent,
          },
          {
            path: 'equipment',
            component: IncidentEquipmentCompComponent,
          },
        ],
      },
      {
        path: 'notifications',
        component: Notifications3CompComponent,
      },
      {
        path: 'settings',
        component: SettingsCompComponent,
      },
      {
        path: 'requests',
        component: WorkRequestCompComponent,
        



      },
      {
        path: 'map',
        component: MapComponentComponent,
      },
      {
          path:'newreq',
          component:NewWorkRequestComponent,
          children: [
            {
              path: '',
              component: BasicInformationWorkRequestComponent,
            },
            {
              path: 'history',
              component: StateChangesHistoryRequestComponent,
            },
            {
              path: 'multimedia',
              component: MultimediaAttachmentsNewRequestComponent,
            },
            {
              path: 'equipment',
              component: EquipmentNewRequestComponent,
            }]
  
      }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthentificationService,
    CRUDService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export interface User{
  Username:string;
  Password:string;
  FirstName:string;
  LastName:string;
  EMail:string;
  Adress:string;
  DatumRodjenja:Date;
  UserType:string;
}

export interface Incident{
  ID:string;
  IncidentType:string;
  Prioritet:number;
  Confirmed:boolean;
  Status:string;
  ETA:Date;
  ATA:Date;
  ETR:Date;
  VrijemeRada:Date;
  AffectedPeople:number;
  Pozivi:number;
  Voltage:number;
}

export interface NalogRada{
  NalogType:string;
  Status:string;
  PocetakRada:Date;
  KrajRada:Date;
  Svrha:string;
  Beleske:string;
  Hitno:boolean;
  Kompanija:string;
  TelefonskiBroj:string;
}


export interface Login{
  Username:string,
  Password:string
}