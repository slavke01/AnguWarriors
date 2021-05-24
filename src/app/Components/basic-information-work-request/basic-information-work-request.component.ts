import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NalogRada } from '../../app.module';
import { CRUDService } from '../../Services/crud.service';
@Component({
  selector: 'app-basic-information-work-request',
  templateUrl: './basic-information-work-request.component.html',
  styleUrls: ['./basic-information-work-request.component.css'],
})
export class BasicInformationWorkRequestComponent implements OnInit {
  constructor(private CrudService: CRUDService) {}

  ngOnInit(): void {}
  StartTimeCon = new FormControl('', [Validators.required]);
  EndTimeCon = new FormControl('', [Validators.required]);
  CreatedTimeCon = new FormControl('', [Validators.required]);
  PhoneNoCon = new FormControl('', [Validators.required]);
  CompanyCon = new FormControl('', [Validators.required]);
  PurposeCon = new FormControl('', [Validators.required]);
  DetailsCon = new FormControl('', [Validators.required]);
  NotesCon = new FormControl('', [Validators.required]);

  type = null;
  typeWork = null;
  startTime = null;
  endTime = null;
  emergency: boolean = false;
  company = null;
  phoneNo = null;
  dateTimeCreated = null;
  purpose = null;
  details = null;
  notes = null;

  tipovi = ['PLANIRANI', 'NEPLANIRANI'];
  tipoviWork = ['work1', 'work2', 'work3'];

  getErrorMessageStartTime() {
    if (this.StartTimeCon.hasError('required')) {
      return 'You must Chose a starting date';
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
  }

  onChangeStartTime(param: Date) {
    this.startTime = param;
  }

  onChangeEndTime(param: Date) {
    this.endTime = param;
  }

  onChangeEmTrue() {
    this.emergency = true;
  }

  onChangeEmFalse() {
    this.emergency = false;
  }

  onChangeCompany(param: string) {
    this.company = param;
  }

  onChangePhoneNo(param: string) {
    this.phoneNo = param;
  }

  onChangeCreatedTime(param: string) {
    this.dateTimeCreated = param;
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

  AjmoNalog() {
    var nalog: NalogRada = {
      NalogType: this.type,
      Status: 'Draft',
      PocetakRada: this.startTime,
      KrajRada: this.endTime,
      Svrha: this.purpose,
      Beleske: this.notes,
      Hitno: this.emergency,
      Kompanija: this.company,
      TelefonskiBroj: this.phoneNo,
    };

    console.log(JSON.stringify(nalog));

    this.CrudService.createNalog(nalog).subscribe();
  }
}
