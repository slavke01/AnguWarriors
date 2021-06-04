import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { AppComponent } from './app.component';
import { LoginCompComponent } from './Components/AuthAndAuto/login-comp/login-comp.component';
import { RegCompComponent } from './Components/AuthAndAuto/reg-comp/reg-comp.component';
import { IncidentNewComponent } from './Components/Incidents/incident-new/incident-new.component';
import { SideBarComponent } from './Components/Home/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { DashboardCompComponent } from './Components/Home/dashboard-comp/dashboard-comp.component';
import { IncidentsCompComponent } from './Components/Incidents/incidents-comp/incidents-comp.component';
import { NewIncidentCompComponent } from './Components/Incidents/new-incident-comp/new-incident-comp.component';
import { NewDevicesCompComponent } from './Components/Incidents/new-devices-comp/new-devices-comp.component';
import { IncidentResolutionCompComponent } from './Components/Incidents/incident-resolution-comp/incident-resolution-comp.component';
import { IncidentCallsCompComponent } from './Components/Incidents/incident-calls-comp/incident-calls-comp.component';
import { IncidentCrewCompComponent } from './Components/Incidents/incident-crew-comp/incident-crew-comp.component';
import { IncidentMultimediaCompComponent } from './Components/Incidents/incident-multimedia-comp/incident-multimedia-comp.component';
import { IncidentEquipmentCompComponent } from './Components/Incidents/incident-equipment-comp/incident-equipment-comp.component';
import { NewCallCompComponent } from './Components/Incidents/new-call-comp/new-call-comp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NewCallDialogTableComponent } from './Components/Incidents/new-call-dialog-table/new-call-dialog-table.component';
import { NotificationsMenuCompComponent } from './Components/Notifications/notifications-menu-comp/notifications-menu-comp.component';
import { Notifications3CompComponent } from './Components/Notifications/notifications3-comp/notifications3-comp.component';
import { SettingsCompComponent } from './Components/AuthAndAuto/settings-comp/settings-comp.component';
import { WorkRequestCompComponent } from './Components/WorkRequest/work-request-comp/work-request-comp.component';
import { NewWorkRequestComponent } from './Components/WorkRequest/new-work-request/new-work-request.component';
import { BasicInformationWorkRequestComponent } from './Components/WorkRequest/basic-information-work-request/basic-information-work-request.component';
import { StateChangesHistoryRequestComponent } from './Components/WorkRequest/state-changes-history-request/state-changes-history-request.component';
import { MultimediaAttachmentsNewRequestComponent } from './Components/WorkRequest/multimedia-attachments-new-request/multimedia-attachments-new-request.component';
import { EquipmentNewRequestComponent } from './Components/WorkRequest/equipment-new-request/equipment-new-request.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MapComponentComponent } from './Components/Home/map-component/map-component.component';
import { MatInputModule } from "@angular/material/input"
import { MatIconModule} from "@angular/material/icon"
import { ReactiveFormsModule } from "@angular/forms"
import { AuthentificationService } from "./Services/authentification.service"
import { CRUDService } from "./Services/crud.service"
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './Components/AuthAndAuto/user-info/user-info.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './Services/auth-guard.service';
import { NewElementCompComponent } from './Components/Incidents/new-element-comp/new-element-comp.component';
import { PlanRadaComponent } from './Components/SwitchingPlan/plan-rada/plan-rada.component';
import { NewPlanRadaComponent } from './Components/SwitchingPlan/new-plan-rada/new-plan-rada.component';
import { BasicPlanRadaComponent } from './Components/SwitchingPlan/basic-plan-rada/basic-plan-rada.component';
import { AdminCompComponent } from './Components/AuthAndAuto/admin-comp/admin-comp.component';
import { ApproveUserComponent } from './Components/AuthAndAuto/approve-user/approve-user.component';
import { EditIncidentComponent } from './Components/Incidents/edit-incident/edit-incident.component';
import { UpdateNalogRadaComponent } from './Components/WorkRequest/update-nalog-rada/update-nalog-rada.component';
import { UpdatePlanRadaComponent } from './Components/SwitchingPlan/update-plan-rada/update-plan-rada.component';
import { SafetyDocStartComponent } from './components/SafetyDocs/safety-doc-start/safety-doc-start.component';
import { SafetyDocBasicInfoComponent } from './Components/SafetyDocs/safety-doc-basic-info/safety-doc-basic-info.component';


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
    NewElementCompComponent,
    PlanRadaComponent,
    NewPlanRadaComponent,
    BasicPlanRadaComponent,
    AdminCompComponent,
    ApproveUserComponent,
    EditIncidentComponent,
    UpdateNalogRadaComponent,
    UpdatePlanRadaComponent,
    SafetyDocStartComponent,
    SafetyDocBasicInfoComponent
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
          path:'switching',
          component:PlanRadaComponent,
          canActivate: [AuthGuardService]
      },
      {
        path: 'map',
        component: MapComponentComponent,
        canActivate: [AuthGuardService]

      },
      {
        path: 'editincident',
        component:EditIncidentComponent ,
        
      },
      {
        path:'editnalog',
        component: UpdateNalogRadaComponent,
      },
      {
        path:'safety',
        component: SafetyDocStartComponent,
      },
      {
        path:'safetyDocNew',
        component: SafetyDocBasicInfoComponent,
      },
      {
        path:'editplan',
        component: UpdatePlanRadaComponent,
      },
      {
        path: 'newswitch',
        component:  NewPlanRadaComponent ,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            component: BasicPlanRadaComponent,
          },
          
        ]
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
  username:string;
  password:string;
  firstName:string;
  lastName:string;
  eMail:string;
  adress:string;
  datumRodjenja:Date;
  userType:string;
  approved:boolean;
}

export interface Incident{
  id:string;
  incidentType:string;
  prioritet:number;
  confirmed:boolean;
  status:string;
  eta:Date;
  ata:Date;
  etr:Date;
  vrijemeRada:Date;
  affectedPeople:number;
  pozivi:number;
  voltage:number;
}

export interface NalogRada{
  id:string;
  nalogType:string;
  status:string;
  pocetakRada:Date;
  krajRada:Date;
  svrha:string;
  beleske:string;
  hitno:boolean;
  kompanija:string;
  telefonskiBroj:string;
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

export interface PlanRada{
  idPlana:string;
  documentType:string;
  status:string;
  pocetakRada:Date;
  krajRada:Date;
  svrha:string;
  beleske:string;
  detalji:string;
  ulica:string;
  kompanija:string;
  telefonskiBroj:string;
  createdBy:string;
}
export interface changePassword{
username:string;
oldPassword:string;
newPassword:string;
}

export interface SafetyDoc{

  id:string;
  status:string;
  detalji:string;
  beleske:string;
  telefonskiBroj:string;
  createdBy:string;
  safetyType:string;

}