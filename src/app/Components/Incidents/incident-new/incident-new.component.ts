import { Component, OnInit } from '@angular/core';
//import { stat } from 'node:fs';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Incident, Poruka } from '../../../app.module';
import { CRUDService } from '../../../Services/crud.service';
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
  eta = null;
  ata = null;
  affectedCustomers: number = null;
  etr = null;
  calls: number = null;
  voltage: number = null;
  scheduledTime = null;
  dozvola: boolean = false;

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
    if (this.DescriptionCon.hasError('required')) {
      return 'You must enter Description';
    }
    return '';
  }
  getErrorMessageAffectedCustomers() {
    if (this.AffCusCon.hasError('required')) {
      return 'You must enter Description';
    }
    return '';
  }
  getErrorMessageCalls() {
    if (this.CallsCon.hasError('required')) {
      return 'You must enter Calls';
    }
    return '';
  }
  getErrorMessageVoltage() {
    if (this.VoltageCon.hasError('required')) {
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
    this.KlikDozvola();
  }

  onChangeType(param: string) {
    this.type = param;
    this.KlikDozvola();
  }
  onChangeStatus(param: string) {
    this.status = param;
    this.KlikDozvola();
  }

  onChangeEta(param: Date) {
    this.eta = param;
    this.KlikDozvola();
  }

  onChangeAta(param: Date) {
    this.ata = param;
    this.KlikDozvola();
  }

  onChangeAffectedCustomers(param: number) {
    this.affectedCustomers = param;
    this.KlikDozvola();
  }

  onChangeEtr(param: Date) {
    this.etr = param;
    this.KlikDozvola();
  }

  onChangeCalls(param: number) {
    this.calls = param;
    this.KlikDozvola();
  }

  onChangeVoltage(param: number) {
    this.voltage = param;
    this.KlikDozvola();
  }

  onChangeScheduledTime(param: Date) {
    this.scheduledTime = param;
    this.KlikDozvola();
  }
  constructor(
    private router: Router,
    private crudService: CRUDService,
    private toastr: ToastrService,
    private jwtHelper:JwtHelperService
  ) {}

  ngOnInit(): void {}
  gotovoFja() {
    var incident: Incident = {
      id: this.incId,
      incidentType: this.type,
      prioritet: 4,
      confirmed: this.isChecked,
      status: this.status,
      eta: this.eta,
      ata: this.ata,
      etr: this.etr,
      vrijemeRada: this.scheduledTime,
      affectedPeople: this.affectedCustomers,
      pozivi: this.calls,
      voltage: this.voltage,
    };
    console.log(JSON.stringify(incident));
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.crudService.createIncident(incident).subscribe(
      (response) => {
        this.toastr.success('Uspesno dodat incident', 'Success');
        var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Uspesno dodat incident",
          procitana:false,
          tip:"Success",
          idPoruke:""
      }

      this.crudService.createMessage(poruka).subscribe();
      },
      (err) => {
        this.toastr.error('Greska pri dodavanju incidenta', 'Eror');
        var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Greska pri dodavanju incidenta",
          procitana:false,
          tip:"Error",
          idPoruke:""
      }

      this.crudService.createMessage(poruka).subscribe();
      }
    );
  }

  KlikDozvola() {
    if (
      this.incId != null &&
      this.type != null &&
      this.status != null &&
      this.eta != null &&
      this.ata != null &&
      this.etr != null &&
      this.scheduledTime != null &&
      this.affectedCustomers != null &&
      this.calls != null &&
      this.voltage != null
    ) {
      this.dozvola = true;
    } else {
      this.dozvola = false;
    }
  }
}
