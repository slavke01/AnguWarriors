import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlanRada } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update-plan-rada',
  templateUrl: './update-plan-rada.component.html',
  styleUrls: ['./update-plan-rada.component.css']
})
export class UpdatePlanRadaComponent implements OnInit {
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
  company = '';
  phoneNo = '';
  purpose = '';
  details = '';
  notes = '';
  ulica = '';
  idplana = '';
  dozvola:boolean=false;
  poruke:string[]=[]
  model:PlanRada={
    idPlana:'',
    documentType:'',
    status:'',
    pocetakRada:new Date(),
    krajRada:new Date(),
    svrha:'',
    beleske:'',
    detalji:'',
    ulica:'',
    kompanija:'',
    telefonskiBroj:'',
    createdBy:''

  }
  constructor(private router:Router,private crudService:CRUDService,private jwtHelper:JwtHelperService) { 
    let id = this.router.getCurrentNavigation().extras.state.example;
    this.crudService.getPlan(id).subscribe((data:PlanRada)=>{
        this.model=data;
        this.idplana=data.idPlana;
        this.type=data.documentType;
        this.startTime=data.pocetakRada;
        this.endTime=data.krajRada;
        this.purpose=data.svrha;
        this.notes=data.beleske;
        this.company=data.kompanija;
        this.phoneNo=data.telefonskiBroj;
        this.details=data.detalji;
        this.ulica=data.ulica;


    });
      this.crudService.getPlanChanges(id).subscribe((data:string[])=>{

this.poruke=data;

      });
  }

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
    this.KlikDozvola();
  }

  onChangeEndTime(param: Date) {
    this.endTime = param;
    this.KlikDozvola();
  }
  onChangeUlica(param: string) {
    this.ulica = param;
    this.KlikDozvola();
  }
  onChangeCompany(param: string) {
    this.company = param;
    this.KlikDozvola();
  }
  onChangeID(param: string) {
    this.idplana = param;
    this.KlikDozvola();
  }
  onChangePhoneNo(param: string) {
    this.phoneNo = param;
    this.KlikDozvola();
  }
  onChangePurpose(param: string) {
    this.purpose = param;
    this.KlikDozvola();
  }
  onChangeDetails(param: string) {
    this.details = param;
    this.KlikDozvola();
  }
  onChangeNotes(param: string) {
    this.notes = param;
    this.KlikDozvola();
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
    this.crudService.updatePlan(plan).subscribe();
    setTimeout(() => {
      this.router.navigate(['switching']);
    }, 300);
   
  }
  KlikDozvola(){

    if(this.idplana!='' && this.startTime!=null && this.endTime!=null && this.purpose!='' &&this.notes!='' && this.company!=''
       && this.phoneNo!='' && this.details!='' && this.ulica!='')
    {
      this.dozvola=true;
    }
    else
    {
      this.dozvola=false;
    }
  }
}
