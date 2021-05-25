import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { LoginCompComponent } from './Components/login-comp/login-comp.component';
import { RegCompComponent } from './Components/reg-comp/reg-comp.component';
import { IncidentNewComponent } from './Components/incident-new/incident-new.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { DashboardCompComponent } from './Components/dashboard-comp/dashboard-comp.component';
import { IncidentsCompComponent } from './Components/incidents-comp/incidents-comp.component';
import { NewIncidentCompComponent } from './Components/new-incident-comp/new-incident-comp.component';
import { NewDevicesCompComponent } from './Components/new-devices-comp/new-devices-comp.component';
import { IncidentResolutionCompComponent } from './Components/incident-resolution-comp/incident-resolution-comp.component';
import { IncidentCallsCompComponent } from './Components/incident-calls-comp/incident-calls-comp.component';
import { IncidentCrewCompComponent } from './Components/incident-crew-comp/incident-crew-comp.component';
import { IncidentMultimediaCompComponent } from './Components/incident-multimedia-comp/incident-multimedia-comp.component';
import { IncidentEquipmentCompComponent } from './Components/incident-equipment-comp/incident-equipment-comp.component';
import { NewCallCompComponent } from './Components/new-call-comp/new-call-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NewCallDialogTableComponent } from './Components/new-call-dialog-table/new-call-dialog-table.component';
import { NotificationsMenuCompComponent } from './Components/notifications-menu-comp/notifications-menu-comp.component';
import { Notifications3CompComponent } from './Components/notifications3-comp/notifications3-comp.component';
import { SettingsCompComponent } from './Components/settings-comp/settings-comp.component';
import { WorkRequestCompComponent } from './Components/work-request-comp/work-request-comp.component';
import { NewWorkRequestComponent } from './Components/new-work-request/new-work-request.component';
import { BasicInformationWorkRequestComponent } from './Components/basic-information-work-request/basic-information-work-request.component';
import { StateChangesHistoryRequestComponent } from './Components/state-changes-history-request/state-changes-history-request.component';
import { MultimediaAttachmentsNewRequestComponent } from './Components/multimedia-attachments-new-request/multimedia-attachments-new-request.component';
import { EquipmentNewRequestComponent } from './Components/equipment-new-request/equipment-new-request.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MapComponentComponent } from './Components/map-component/map-component.component';
import { MatInputModule } from "@angular/material/input"
import { MatIconModule} from "@angular/material/icon"
import { ReactiveFormsModule } from "@angular/forms"
import { AuthentificationService } from "./Services/authentification.service"
import { CRUDService } from "./Services/crud.service"
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Components/user-info/user-info.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './Services/auth-guard.service';
import { NewElementCompComponent } from './Components/new-element-comp/new-element-comp.component';
export function tokenGetter() {
  return localStorage.getItem("jwt");
}
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
    MapComponentComponent,
    UserInfoComponent,
    NewElementCompComponent
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
        path:'userInfo',
        component:UserInfoComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'incidents',
        component: IncidentsCompComponent,
        canActivate: [AuthGuardService]

      },
      {
        path: 'home',
        component: DashboardCompComponent,
        canActivate: [AuthGuardService]

      },
      {
        path: 'new',
        component: NewIncidentCompComponent,
        canActivate: [AuthGuardService],

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
        canActivate: [AuthGuardService]

      },
      {
        path: 'settings',
        component: SettingsCompComponent,
        canActivate: [AuthGuardService]

      },
      {
        path: 'requests',
        component: WorkRequestCompComponent,
        canActivate: [AuthGuardService]

        



      },
      {
        path: 'map',
        component: MapComponentComponent,
        canActivate: [AuthGuardService]

      },
      {
          path:"newelement",
          component:NewElementCompComponent,
      },
      {
          path:'newreq',
          component:NewWorkRequestComponent,
          canActivate: [AuthGuardService],

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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:44370"],
        blacklistedRoutes: []
      }
    })
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
export interface Elementi{
  id:string,
  naziv:string,
  elementType:string,
  adress:string,
  longitude:string,
  latitude:string
}