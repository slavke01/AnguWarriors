import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Poruka, SafetyDoc } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-update-safetydoc',
  templateUrl: './update-safetydoc.component.html',
  styleUrls: ['./update-safetydoc.component.css'],
})
export class UpdateSafetydocComponent implements OnInit {
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

  poruke: string[] = [];

  model: SafetyDoc = {
    id: '',
    status: '',
    detalji: '',
    beleske: '',
    telefonskiBroj: '',
    createdBy: '',
    safetyType: '',
    planRadaId: '',
  };
  planrada: string = '';
  dozvola: boolean = false;
  constructor(
    private crs: CRUDService,
    private jwtHelper: JwtHelperService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let id = this.router.getCurrentNavigation().extras.state.example;
    this.crs.getSafetyDoc(id).subscribe((data: SafetyDoc) => {
      this.model = data;
      this.sdID = data.id;

      this.sdDetalji = data.detalji;
      this.sdBeleska = data.beleske;
      this.sdTelefonskiBroj = data.telefonskiBroj;
      this.planrada = data.planRadaId;
      this.type = data.safetyType;
    });
    this.crs.getSafetyChanges(id).subscribe((data: string[]) => {
      this.poruke = data;
    });
  }

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
      planRadaId: this.planrada,
    };
    this.crs.updateSafetyDoc(saf).subscribe(
      (response) => {
        this.toastr.success('Uspesno izmjenjen sigurnosni dokument', 'Success');
        var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Uspesno izmjenjen sigurnosni dokument",
          procitana:false,
          tip:"Success"
      }
  
      this.crs.createMessage(poruka).subscribe();
      },
      (err) => {
        this.toastr.error('Greska pri izmjeni sigurnosnog dokument', 'Eror');
        var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Greska pri izmeni sigurnosnog dokument",
          procitana:false,
          tip:"Error"
      }
  
      this.crs.createMessage(poruka).subscribe();
      }
    );
    setTimeout(() => {
      this.router.navigate(['safety']);
    }, 300);
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
