import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Incident, Poruka } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.css'],
})
export class EditIncidentComponent implements OnInit {
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
  outageTime = null;
  etr = null;
  calls: number = null;
  voltage: number = null;
  scheduledTime = null;
  dozvola: boolean = false;
  poruke: string[] = [];
  model: Incident = {
    id: '',
    prioritet: 0,
    incidentType: '',
    confirmed: false,
    status: '',
    eta: new Date(),
    ata: new Date(),
    etr: new Date(),
    vrijemeRada: new Date(),
    affectedPeople: 0,
    pozivi: 0,
    voltage: 0,
  };
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
      return 'You must enter Affected Customers';
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

  onChangeOutageTime(param: Date) {
    this.outageTime = param;
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
    private crud: CRUDService,
    private toastr: ToastrService,
    private jwtHelper:JwtHelperService
  ) {
    let id = this.router.getCurrentNavigation().extras.state.example;
    this.crud.getIncident(id).subscribe((data: Incident) => {
      this.model = data;

      this.incId = data.id;
      this.type = data.incidentType;

      this.isChecked = data.confirmed;
      this.status = data.status;
      this.eta = data.eta;
      this.ata = data.ata;
      this.etr = data.etr;
      this.scheduledTime = data.vrijemeRada;
      this.affectedCustomers = data.affectedPeople;
      this.calls = data.pozivi;
      this.voltage = data.voltage;
    });

    this.crud.getIncidentChanges(id).subscribe((data: string[]) => {
      this.poruke = data;
    });
  }

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
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.crud.updateIncident(incident).subscribe((response) => {
      this.toastr.success("Uspesno izmenjen incident","Success");
      var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Uspesno izmenjen incident",
          procitana:false,
          tip:"Success",
          idPoruke:""
      }

      this.crud.createMessage(poruka).subscribe();
    },
    (err) => {
      this.toastr.error("Greska pri izmeni incidenta","Eror");
      var poruka:Poruka={
        idKorisnika:username,
        sadrzaj:"Greska pri izmeni incidenta",
        procitana:false,
        tip:"Error",
        idPoruke:""
    }

    this.crud.createMessage(poruka).subscribe();
    });
    setTimeout(() => {
      this.router.navigate(['incidents']);
    }, 300);
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
