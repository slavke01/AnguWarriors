import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';
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
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from './Services/authentification.service';
import { CRUDService } from './Services/crud.service';
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
import { SafetyDocStartComponent } from './Components/SafetyDocs/safety-doc-start/safety-doc-start.component';
import { SafetyDocBasicInfoComponent } from './Components/SafetyDocs/safety-doc-basic-info/safety-doc-basic-info.component';
import { SafetyDocMenuComponent } from './Components/SafetyDocs/safety-doc-menu/safety-doc-menu.component';
import { UpdateSafetydocComponent } from './Components/SafetyDocs/update-safetydoc/update-safetydoc.component';
import { AllUsersComponent } from './Components/AuthAndAuto/all-users/all-users.component';
import { CrewComponentComponent } from './Components/AuthAndAuto/crew-component/crew-component.component';
import { NewCrewComponentComponent } from './Components/AuthAndAuto/new-crew-component/new-crew-component.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WorkReqDialogComponent } from './Components/WorkRequest/work-req-dialog/work-req-dialog.component';
import { IskacuciProzorZaSwitchingPlanComponent } from './Components/SwitchingPlan/iskacuci-prozor-za-switching-plan/iskacuci-prozor-za-switching-plan.component';
import { IskacuciProzorZaEkipuUPlanuComponent } from './Components/SwitchingPlan/iskacuci-prozor-za-ekipu-uplanu/iskacuci-prozor-za-ekipu-uplanu.component';
import { SafetydocdialogComponent } from './Components/SafetyDocs/safetydocdialog/safetydocdialog.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { ToastrModule } from 'ngx-toastr';
import { TabelaSveNotifikacijeComponent } from './Components/Notifications/tabela-sve-notifikacije/tabela-sve-notifikacije.component';
import { SuccesTabelaNotificationsComponent } from './Components/Notifications/succes-tabela-notifications/succes-tabela-notifications.component';
import { ErrorTabelaNotificationsComponent } from './Components/Notifications/error-tabela-notifications/error-tabela-notifications.component';
import { ReadTabelaNotificationsComponent } from './Components/Notifications/read-tabela-notifications/read-tabela-notifications.component';
import { SearchComponent } from './Components/Home/search/search.component';
export function tokenGetter() {
  return localStorage.getItem('jwt');
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
    SafetyDocBasicInfoComponent,
    SafetyDocMenuComponent,
    UpdateSafetydocComponent,
    AllUsersComponent,
    CrewComponentComponent,
    NewCrewComponentComponent,
    WorkReqDialogComponent,
    IskacuciProzorZaSwitchingPlanComponent,
    IskacuciProzorZaEkipuUPlanuComponent,
    SafetydocdialogComponent,
    TabelaSveNotifikacijeComponent,
    SuccesTabelaNotificationsComponent,
    ErrorTabelaNotificationsComponent,
    ReadTabelaNotificationsComponent,
    SearchComponent,
  ],
  entryComponents: [NewCallDialogTableComponent],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    DragDropModule,
  ],

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
    SocialLoginModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginCompComponent,
      },
      {
        path: 'report',
        component: IncidentNewComponent,
      },
      {
        path: 'register',
        component: RegCompComponent,
      },
      {
        path: 'userInfo',
        component: UserInfoComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'incidents',
        component: IncidentsCompComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'newcall',
        component: NewCallCompComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'admin',
        component: AdminCompComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            component: AllUsersComponent,
          },
          {
            path: 'approve',
            component: ApproveUserComponent,
          },
          {
            path: 'crews',
            component: CrewComponentComponent,
          },
        ],
      },

      {
        path: 'home',
        component: DashboardCompComponent,
        canActivate: [AuthGuardService],
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
        component: NotificationsMenuCompComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            component: TabelaSveNotifikacijeComponent,
          },
          {
            path: 'successNotifications',
            component: SuccesTabelaNotificationsComponent,
          },
          {
            path: 'errorNotifications',
            component: ErrorTabelaNotificationsComponent,
          },
          {
            path: 'readNotifications',
            component: ReadTabelaNotificationsComponent,
          },
        ],
      },
      {
        path: 'settings',
        component: SettingsCompComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'requests',
        component: WorkRequestCompComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'switching',
        component: PlanRadaComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'map',
        component: MapComponentComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'editincident',
        component: EditIncidentComponent,
      },
      {
        path: 'editnalog',
        component: UpdateNalogRadaComponent,
      },
      {
        path: 'editsafety',
        component: UpdateSafetydocComponent,
      },
      {
        path: 'safety',
        component: SafetyDocStartComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'safetydocnew',
        component: SafetyDocMenuComponent,
        children: [
          {
            path: '',
            component: SafetyDocBasicInfoComponent,
            canActivate: [AuthGuardService],
          },
        ],
      },
      {
        path: 'editplan',
        component: UpdatePlanRadaComponent,
      },
      {
        path: 'newswitch',
        component: NewPlanRadaComponent,
        canActivate: [AuthGuardService],
        children: [
          {
            path: '',
            component: BasicPlanRadaComponent,
          },
        ],
      },

      {
        path: 'newelement',
        component: NewElementCompComponent,
      },
      {
        path: 'newCrew',
        component: NewCrewComponentComponent,
      },
      {
        path: 'testing',
        component: SearchComponent,
      },
      {
        path: 'newreq',
        component: NewWorkRequestComponent,
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
          },
        ],
      },
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:44370'],
        blacklistedRoutes: [],
      },
    }),
  ],
  providers: [
    AuthentificationService,
    CRUDService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '944781843826-dbk4i39vbchmp42k1mf380kol5i525tj.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
export let logged: boolean;
export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  eMail: string;
  adress: string;
  datumRodjenja: Date;
  userType: string;
  approved: boolean;
}

export interface Ekipa {
  idEkipe: string;
  nazivEkipe: string;
}

export interface EkipaDTO {
  idEkipe: string;
  nazivEkipe: string;
  usersId: string[];
}
export interface Incident {
  id: string;
  incidentType: string;
  prioritet: number;
  confirmed: boolean;
  status: string;
  eta: Date;
  ata: Date;
  etr: Date;
  vrijemeRada: Date;
  affectedPeople: number;
  pozivi: number;
  voltage: number;
}
export interface Call {
  razlog: string;
  komentar: string;
  kvar: string;
  usernameKor: string;
}

export interface NalogRada {
  id: string;
  nalogType: string;
  status: string;
  pocetakRada: Date;
  krajRada: Date;
  svrha: string;
  beleske: string;
  hitno: boolean;
  kompanija: string;
  telefonskiBroj: string;
  idIncidenta: string;
}

export interface Login {
  Username: string;
  Password: string;
}
export interface Elementi {
  id: string;
  naziv: string;
  elementType: string;
  adress: string;
  longitude: string;
  latitude: string;
}

export interface PlanRada {
  idPlana: string;
  documentType: string;
  status: string;
  pocetakRada: Date;
  krajRada: Date;
  svrha: string;
  beleske: string;
  detalji: string;
  ulica: string;
  kompanija: string;
  telefonskiBroj: string;
  createdBy: string;
  workRequestId: string;
  crewId: string;
}
export interface changePassword {
  username: string;
  oldPassword: string;
  newPassword: string;
}
export interface DialogData {
  id: string;
}
export interface SafetyDoc {
  id: string;
  status: string;
  detalji: string;
  beleske: string;
  telefonskiBroj: string;
  createdBy: string;
  safetyType: string;
  planRadaId: string;
}

export interface Poruka {
  idKorisnika: string;
  sadrzaj: string;
  tip: string;
  procitana: boolean;
  idPoruke: string;
}

export interface Resolution {
  idRes: string;
  cause: string;
  subCause: string;
  construction: string;
  material: string;
}
