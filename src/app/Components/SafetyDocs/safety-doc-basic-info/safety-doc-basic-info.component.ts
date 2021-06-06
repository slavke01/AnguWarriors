import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SafetyDoc } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';
import { SafetydocdialogComponent } from '../safetydocdialog/safetydocdialog.component';

@Component({
  selector: 'app-safety-doc-basic-info',
  templateUrl: './safety-doc-basic-info.component.html',
  styleUrls: ['./safety-doc-basic-info.component.css'],
})
export class SafetyDocBasicInfoComponent implements OnInit {
  sdID = null;
  SdID = new FormControl('', [Validators.required]);

  sdDetalji = null;
  SdDetalji = new FormControl('', [Validators.required]);

  sdBeleska = null;
  SdBeleska = new FormControl('', [Validators.required]);

  sdTelefonskiBroj = null;
  SdTelefonskiBroj = new FormControl('', [Validators.required]);

  type = '';

  tipovi = ['PLANIRANI', 'NEPLANIRANI'];

  dozvola: boolean = false;

  constructor(
    private crs: CRUDService,
    private jwtHelper: JwtHelperService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onChangeSdId(param: string) {
    this.sdID = param;
    this.KlikDozvola();
  }

  getErrorMessageSdID() {
    if (this.SdID.hasError('required')) {
      return 'You must enter Safety Document ID';
    }
    return '';
  }

  onChangeSdDetalji(param: string) {
    this.sdDetalji = param;
    this.KlikDozvola();
  }

  getErrorMessageSdDetalji() {
    if (this.SdDetalji.hasError('required')) {
      return 'You must enter Safety Document Details';
    }
    return '';
  }

  onChangeSdBeleska(param: string) {
    this.sdBeleska = param;
    this.KlikDozvola();
  }

  getErrorMessageSdBeleska() {
    if (this.SdBeleska.hasError('required')) {
      return 'You must enter Safety Document Beleska';
    }
    return '';
  }

  onChangeSdTelefonskiBroj(param: string) {
    this.sdTelefonskiBroj = param;
    this.KlikDozvola();
  }

  getErrorMessageSdTelefonskiBroj() {
    if (this.SdTelefonskiBroj.hasError('required')) {
      return 'You must enter Safety Document Telefonski broj';
    }
    return '';
  }

  AjmoSafetyDoc() {
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    var saf: SafetyDoc = {
      id: this.sdID,
      status: 'Draft',
      detalji: this.sdDetalji,
      beleske: this.sdBeleska,
      telefonskiBroj: this.sdTelefonskiBroj,
      createdBy: username,
      safetyType: this.type,
      planRadaId: this.idPlan,
    };

    console.log(JSON.stringify(saf));

    this.crs.createSafetyDocument(saf).subscribe();
    setTimeout(() => {
      this.router.navigate(['safety']);
    }, 300);
  }
  idPlan: string = '';
  otvoriDialog(): void {
    const dialogRef = this.dialog.open(SafetydocdialogComponent, {
      width: '900px',
      height: '400px',
      data: { id: this.idPlan },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.idPlan = result['result'];
      console.log(this.idPlan);
    });
  }

  KlikDozvola() {
    if (
      this.sdBeleska != null &&
      this.sdDetalji != null &&
      this.sdID != null &&
      this.sdTelefonskiBroj != null
    ) {
      this.dozvola = true;
    } else {
      this.dozvola = false;
    }
  }
}
