import { Component, OnInit } from '@angular/core';
//import { stat } from 'node:fs';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Incident } from '../../app.module';
import { CRUDService } from '../../Services/crud.service';
@Component({
  selector: 'app-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.css'],
})
export class IncidentNewComponent implements OnInit {
  IncIDCon = new FormControl('', [Validators.required]);
  StatusCon = new FormControl('', [Validators.required]);
  DescriptionCon = new FormControl('', [Validators.required]);
  AffCusCon = new FormControl('', [Validators.required]);
  CallsCon = new FormControl('', [Validators.required]);
  VoltageCon = new FormControl('', [Validators.required]);
  ETACon = new FormControl('', [Validators.required]);
  ATACon = new FormControl('', [Validators.required]);
  ETRCon = new FormControl('', [Validators.required]);
  SchTimeCon = new FormControl('', [Validators.required]);
  OutageTimeCon = new FormControl('', [Validators.required]);
  TypeCon = new FormControl('', [Validators.required]);
  niz = ['PLANIRANI', 'NEPLANIRANI'];
  incId = null;
  type = this.niz[0];
  isChecked = true;
  status = null;
  desc = null;
  eta = null;
  ata = null;
  affectedCustomers:number = null;
  outageTime = null;
  etr = null;
  calls:number = null;
  voltage:number = null;
  scheduledTime = null;
  getErrorMessageIncID() {
    if (this.IncIDCon.hasError('required')) {
      return 'You must enter Incident ID';
    }
    return '';
  }
  getErrorMessageStatus() {
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Status';
    }
    return '';
  }
  getErrorMessageDescription() {
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Description';
    }
    return '';
  }
  getErrorMessageAffectedCustomers() {
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Description';
    }
    return '';
  }
  getErrorMessageCalls() {
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Calls';
    }
    return '';
  }
  getErrorMessageVoltage() {
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Voltage';
    }
    return '';
  }
  getErrorMessageETA() {
    if (this.ETACon.hasError('required')) {
      return 'You must chose an ETA';
    }
    return '';
  }
  getErrorMessageATA() {
    if (this.ATACon.hasError('required')) {
      return 'You must chose an ATA';
    }
    return '';
  }
  getErrorMessageETR() {
    if (this.ETRCon.hasError('required')) {
      return 'You must chose an ETR';
    }
    return '';
  }
  getErrorMessageSchTime() {
    if (this.ETRCon.hasError('required')) {
      return 'You must chose Scheduled Time';
    }
    return '';
  }
  getErrorMessageOutageTime() {
    if (this.ETRCon.hasError('required')) {
      return 'You must chose Outage Time';
    }
    return '';
  }
  getErrorMessageType() {
    if (this.TypeCon.hasError('required')) {
      return 'You must chose a Type';
    }
    return '';
  }
  onChangeIncId(param: string) {
    this.incId = param;
  }

  onChangeType(param: string) {
    this.type = param;
  }
  onChangeStatus(param: string) {
    this.status = param;
  }

  onChangeDesc(param: string) {
    this.desc = param;
  }

  onChangeEta(param: Date) {
    this.eta = param;
  }

  onChangeAta(param: Date) {
    this.ata = param;
  }

  onChangeAffectedCustomers(param: number) {
    this.affectedCustomers = param;
  }

  onChangeOutageTime(param: Date) {
    this.outageTime = param;
  }

  onChangeEtr(param: Date) {
    this.etr = param;
  }

  onChangeCalls(param: number) {
    this.calls = param;
  }

  onChangeVoltage(param: number) {
    this.voltage = param;
  }

  onChangeScheduledTime(param: Date) {
    this.scheduledTime = param;
  }
  constructor(  private router: Router,private crudService:CRUDService) {}

  ngOnInit(): void {}
  gotovoFja() {
    var incident: Incident = {
      ID: this.incId,
      IncidentType: this.type,
      Prioritet: 4,
      Confirmed: this.isChecked,
      Status: this.status,
      ETA: this.eta,
      ATA: this.ata,
      ETR: this.etr,
      VrijemeRada: this.scheduledTime,
      AffectedPeople: this.affectedCustomers,
      Pozivi: this.calls,
      Voltage: this.voltage,
    };
    console.log(JSON.stringify(incident));

    this.crudService.createIncident(incident).subscribe();
  }

  
}
