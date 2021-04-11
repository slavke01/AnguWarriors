import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

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
  ],
  entryComponents:[NewCallDialogTableComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      {
        path:'',
        component:DashboardCompComponent
      },
      {
      path:'register',
      component: RegCompComponent
      },
      {
        path:'incidents',
        component: IncidentsCompComponent

      },
      {
        path:'home',
        component:DashboardCompComponent
      },
      {
        path:'new',
        component:NewIncidentCompComponent
      }
    ]),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
