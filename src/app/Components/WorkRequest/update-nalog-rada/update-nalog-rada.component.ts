import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NalogRada } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update-nalog-rada',
  templateUrl: './update-nalog-rada.component.html',
  styleUrls: ['./update-nalog-rada.component.css']
})
export class UpdateNalogRadaComponent implements OnInit {
  IdCon = new FormControl('', [Validators.required]);
  StartTimeCon = new FormControl('', [Validators.required]);
  EndTimeCon = new FormControl('', [Validators.required]);
  CreatedTimeCon = new FormControl('', [Validators.required]);
  PhoneNoCon = new FormControl('', [Validators.required]);
  CompanyCon = new FormControl('', [Validators.required]);
  PurposeCon = new FormControl('', [Validators.required]);
  DetailsCon = new FormControl('', [Validators.required]);
  NotesCon = new FormControl('', [Validators.required]);

  type = '';
  typeWork = '';
  startTime = null;
  endTime = null;
  emergency: boolean = false;
  company = '';
  phoneNo = '';
  dateTimeCreated ='';
  purpose = '';
  details = '';
  notes = '';
  id='';
  idIncidenta='';
  tipovi = ['PLANIRANI', 'NEPLANIRANI'];
  tipoviWork = ['work1', 'work2', 'work3'];
  dozvola:boolean=false;
  poruke:string[]=[]
  model:NalogRada={
  id:',',
  nalogType:'',
  status:'',
  pocetakRada:new Date(),
  krajRada:new Date(),
  svrha:'',
  beleske:'',
  hitno:false,
  kompanija:'',
  telefonskiBroj:'',
  idIncidenta:''
}


  getErrorMessageStartTime() {
    if (this.StartTimeCon.hasError('required')) {
      return 'You must Chose a starting date';
    }
    return '';
  }
  getErrorMessageId() {
    if (this.IdCon.hasError('required')) {
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
  getErrorMessageCreatedTime() {
    if (this.CreatedTimeCon.hasError('required')) {
      return 'You must Chose created date';
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
  onChangeType(param: string) {
    this.type = param;
    this.KlikDozvola();
  }

  onChangeStartTime(param: Date) {
    this.startTime = param;
    this.KlikDozvola();
  }

  onChangeEndTime(param: Date) {
    this.endTime = param;
    this.KlikDozvola();
  }

  onChangeEmTrue() {
    this.emergency = true;
    this.KlikDozvola();
  }

  onChangeEmFalse() {
    this.emergency = false;
    this.KlikDozvola();
  }

  onChangeCompany(param: string) {
    this.company = param;
    this.KlikDozvola();
  }

  onChangePhoneNo(param: string) {
    this.phoneNo = param;
    this.KlikDozvola();
  }

  onChangeCreatedTime(param: string) {
    this.dateTimeCreated = param;
    this.KlikDozvola();
  }

  onChangePurpose(param: string) {
    this.purpose = param;
    this.KlikDozvola();
  }
  onChangeId(param: string) {
    this.id = param;
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
  constructor(private CrudService:CRUDService,private router:Router) {
    let id = this.router.getCurrentNavigation().extras.state.example;
    this.CrudService.getNalog(id).subscribe((data:NalogRada)=>{
      this.model=data;
      this.id=data.id;
      this.type=data.nalogType;
      this.startTime=data.pocetakRada;
      this.endTime=data.krajRada;
      this.purpose=data.svrha;
      this.notes=data.beleske;
      this.emergency=data.hitno;
      this.company=data.kompanija;
      this.phoneNo=data.telefonskiBroj;
      this.idIncidenta=data.idIncidenta;

    });


    this.CrudService.getNalogChanges(id).subscribe((data:string[])=>{
    this.poruke=data;
    });
   }

  ngOnInit(): void {
  }
  AjmoNalog() {
    var nalog: NalogRada = {
      id:this.id,
      nalogType: this.type,
      status: 'Draft',
      pocetakRada: this.startTime,
      krajRada: this.endTime,
      svrha: this.purpose,
      beleske: this.notes,
      hitno: this.emergency,
      kompanija: this.company,
      telefonskiBroj: this.phoneNo,
      idIncidenta:this.idIncidenta,
    };

    console.log(JSON.stringify(nalog));
    this.CrudService.updateNalog(nalog).subscribe();
    setTimeout(() => {
      this.router.navigate(['requests']);
    }, 300);
   
  }

  KlikDozvola(){

    if(this.id!='' && this.startTime!=null && this.endTime!=null &&this.purpose!='' && this.notes!=''
       && this.emergency!=null && this.company!='' && this.phoneNo!='')
    {
      this.dozvola=true;
    }
    else
    {
      this.dozvola=false;
    }
  }
}
