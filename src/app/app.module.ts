import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { RegCompComponent } from './reg-comp/reg-comp.component';
import { IncidentNewComponent } from './incident-new/incident-new.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    RegCompComponent,
    IncidentNewComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:'',
        component:SideBarComponent
      },
      {
      path:'register',
      component: RegCompComponent
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
