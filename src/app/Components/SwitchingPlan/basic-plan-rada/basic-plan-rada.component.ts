import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlanRada } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-basic-plan-rada',
  templateUrl: './basic-plan-rada.component.html',
  styleUrls: ['./basic-plan-rada.component.css']
})
export class BasicPlanRadaComponent implements OnInit {

  StartTimeCon = new FormControl('', [Validators.required]);
  IDPlanaCon = new FormControl('', [Validators.required]);
  EndTimeCon = new FormControl('', [Validators.required]);
  PhoneNoCon = new FormControl('', [Validators.required]);
  CompanyCon = new FormControl('', [Validators.required]);
  PurposeCon = new FormControl('', [Validators.required]);
  DetailsCon = new FormControl('', [Validators.required]);
  NotesCon = new FormControl('', [Validators.required]);
  UlicaCon = new FormControl('', [Validators.required]);
  tipovi = ['PLANIRANI', 'NEPLANIRANI'];
  tipoviRada = ['PREKIDAC', 'OSIGURAC','TRANSFORMATOR','DISKONEKTOR'];
  type = null;
  typeWork = null;
  startTime = null;
  endTime = null;
  company = null;
  phoneNo = null;
  purpose = null;
  details = null;
  notes = null;
  ulica = null;
  idplana = null;

  constructor(private jwtHelper: JwtHelperService,private CrudService: CRUDService) { }

  ngOnInit(): void {
  }


  getErrorMessageStartTime() {
    if (this.StartTimeCon.hasError('required')) {
      return 'You must Chose a starting date';
    }
    return '';
  }
  getErrorMessageId() {
    if (this.IDPlanaCon.hasError('required')) {
      return 'You must enter an ID';
    }
    return '';
  }
  getErrorMessageEndTime() {
    if (this.EndTimeCon.hasError('required')) {
      return 'You must Chose an ending date';
    }
    return '';
  }
  getErrorMessageUlica() {
    if (this.UlicaCon.hasError('required')) {
      return 'You must enter a Street';
    }
    return '';
  }
  getErrorMessagePhoneNo() {
    if (this.PhoneNoCon.hasError('required')) {
      return 'You must enter a phone number';
    }
    return '';
  }
  getErrorMessageCompany() {
    if (this.CompanyCon.hasError('required')) {
      return 'You must enter a Company';
    }
    return '';
  }
  getErrorMessagePurpose() {
    if (this.PurposeCon.hasError('required')) {
      return 'You must enter a Purpose';
    }
    return '';
  }
  getErrorMessageDetails() {
    if (this.DetailsCon.hasError('required')) {
      return 'You must enter Details';
    }
    return '';
  }
  getErrorMessageNotes() {
    if (this.NotesCon.hasError('required')) {
      return 'You must enter Notes';
    }
    return '';
  }

  onChangeStartTime(param: Date) {
    this.startTime = param;
  }

  onChangeEndTime(param: Date) {
    this.endTime = param;
  }
  onChangeUlica(param: string) {
    this.ulica = param;
  }
  onChangeCompany(param: string) {
    this.company = param;
  }
  onChangeID(param: string) {
    this.idplana = param;
  }
  onChangePhoneNo(param: string) {
    this.phoneNo = param;
  }
  onChangePurpose(param: string) {
    this.purpose = param;
  }
  onChangeDetails(param: string) {
    this.details = param;
  }
  onChangeNotes(param: string) {
    this.notes = param;
  }


  submit(){
    const token = localStorage.getItem("jwt");
    var x =this.jwtHelper.decodeToken(token);
    var username = x["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
    var plan: PlanRada = {
      idPlana:this.idplana,
      documentType: this.type,
      status: 'Draft',
      pocetakRada: this.startTime,
      krajRada: this.endTime,
      svrha: this.purpose,
      beleske: this.notes,
      kompanija: this.company,
      telefonskiBroj: this.phoneNo,
      detalji:this.details,
      ulica:this.ulica,
      createdBy:username
    };
    this.CrudService.createPlan(plan).subscribe();


  }
}
