import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { NalogRada, Poruka } from '../../../app.module';
import { CRUDService } from '../../../Services/crud.service';
import { WorkReqDialogComponent } from '../work-req-dialog/work-req-dialog.component';
@Component({
  selector: 'app-basic-information-work-request',
  templateUrl: './basic-information-work-request.component.html',
  styleUrls: ['./basic-information-work-request.component.css'],
})
export class BasicInformationWorkRequestComponent implements OnInit {
  constructor(
    private CrudService: CRUDService,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService,
    private jwtHelper: JwtHelperService
  ) {}

  ngOnInit(): void {}
  IdCon = new FormControl('', [Validators.required]);
  StartTimeCon = new FormControl('', [Validators.required]);
  EndTimeCon = new FormControl('', [Validators.required]);
  CreatedTimeCon = new FormControl('', [Validators.required]);
  PhoneNoCon = new FormControl('', [Validators.required]);
  CompanyCon = new FormControl('', [Validators.required]);
  PurposeCon = new FormControl('', [Validators.required]);
  DetailsCon = new FormControl('', [Validators.required]);
  NotesCon = new FormControl('', [Validators.required]);
  idInc = '';
  type = '';
  typeWork = '';
  startTime = null;
  endTime = null;
  emergency: boolean = false;
  company = '';
  phoneNo = '';
  dateTimeCreated = '';
  purpose = '';
  details = '';
  notes = '';
  id = '';
  tipovi = ['PLANIRANI', 'NEPLANIRANI'];
  tipoviWork = ['work1', 'work2', 'work3'];
  dozvola: boolean = false;

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

  AjmoNalog() {
    var nalog: NalogRada = {
      id: this.id,
      nalogType: this.type,
      status: 'Draft',
      pocetakRada: this.startTime,
      krajRada: this.endTime,
      svrha: this.purpose,
      beleske: this.notes,
      hitno: this.emergency,
      kompanija: this.company,
      telefonskiBroj: this.phoneNo,
      idIncidenta: this.idInc,
    };

    console.log(JSON.stringify(nalog));
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.CrudService.createNalog(nalog).subscribe(
      (response) => {
        this.toastr.success('Uspesno dodat nalog', 'Success');
        var poruka: Poruka = {
          idKorisnika: username,
          sadrzaj: 'Uspesno dodat nalog',
          procitana: false,
          tip: 'Success',
          idPoruke: '',
        };

        this.CrudService.createMessage(poruka).subscribe();
      },
      (err) => {
        this.toastr.error('Greska pri dodavanju', 'Eror');
        var poruka: Poruka = {
          idKorisnika: username,
          sadrzaj: 'Greska pri dodavanju',
          procitana: false,
          tip: 'Error',
          idPoruke: '',
        };

        this.CrudService.createMessage(poruka).subscribe();
      }
    );

    setTimeout(() => {
      this.router.navigate(['requests']);
    }, 300);
  }

  KlikDozvola() {
    if (
      this.id != '' &&
      this.startTime != null &&
      this.endTime != null &&
      this.purpose != '' &&
      this.notes != '' &&
      this.emergency != null &&
      this.company != '' &&
      this.phoneNo != ''
    ) {
      this.dozvola = true;
    } else {
      this.dozvola = false;
    }
  }

  otvoriDialog(): void {
    const dialogRef = this.dialog.open(WorkReqDialogComponent, {
      width: '700px',
      height: '400px',
      data: { id: this.idInc },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.idInc = result['result'];
      console.log(this.idInc);
    });
  }
}
