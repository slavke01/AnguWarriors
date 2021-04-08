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
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
