import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { CRUDService } from 'src/app/Services/crud.service';
import { Elementi, Poruka } from '../../../app.module';
@Component({
  selector: 'app-new-element-comp',
  templateUrl: './new-element-comp.component.html',
  styleUrls: ['./new-element-comp.component.css'],
})
export class NewElementCompComponent implements OnInit {
  ElementID = new FormControl('', [Validators.required]);
  ElementTip = new FormControl('', [Validators.required]);
  ElementAdress = new FormControl('', [Validators.required]);
  ElementName = new FormControl('', [Validators.required]);
  ElementLon = new FormControl('', [Validators.required]);
  ElementLat = new FormControl('', [Validators.required]);

  niz = ['PREKIDAC', 'OSIGURAC', 'TRANSFORMATOR', 'DISKONEKTOR'];

  id: string = '';
  adress: string = '';
  name: string = '';
  Lon: string = '';
  Lat: string = '';
  type: string = this.niz[0];
  dozvola: boolean = false;

  constructor(
    private crudService: CRUDService,
    private router: Router,
    private toastr: ToastrService,
    private jwtHelper:JwtHelperService
  ) {}

  ngOnInit(): void {}

  getErrorMessageId() {
    if (this.ElementID.hasError('required')) {
      return 'You must enter Element ID';
    }
    return '';
  }
  getErrorMessageAdress() {
    if (this.ElementAdress.hasError('required')) {
      return 'You must enter Adress';
    }
    return '';
  }
  getErrorMessageName() {
    if (this.ElementName.hasError('required')) {
      return 'You must enter Name';
    }
    return '';
  }
  getErrorMessageType() {
    if (this.ElementTip.hasError('required')) {
      return 'You must chose a Type';
    }
    return '';
  }
  getErrorMessageLon() {
    if (this.ElementLon.hasError('required')) {
      return 'You must enter Longitude';
    }
    return '';
  }
  getErrorMessageLat() {
    if (this.ElementLat.hasError('required')) {
      return 'You must enter Latitude';
    }
    return '';
  }

  dodajElement() {
    var element: Elementi = {
      id: this.id,
      naziv: this.name,
      elementType: this.type,
      adress: this.adress,
      longitude: this.Lon,
      latitude: this.Lat,
    };
    const token = localStorage.getItem('jwt');
      var x = this.jwtHelper.decodeToken(token);
      var username =
        x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.crudService.createElement(element).subscribe((response) => {
      this.toastr.success('Uspesno dodat element', 'Success');
      var poruka:Poruka={
        idKorisnika:username,
        sadrzaj:"Uspesno dodat element",
        procitana:false,
        tip:"Success"
    }

    this.crudService.createMessage(poruka).subscribe();
    },
    (err) => {
      this.toastr.error('Greska pri dodavanju elementa', 'Eror');
      var poruka:Poruka={
        idKorisnika:username,
        sadrzaj:"Greska pri dodavanju elementa",
        procitana:false,
        tip:"Error"
    }

    this.crudService.createMessage(poruka).subscribe();
    });
    setTimeout(() => {
      this.router.navigate(['new/devices']);
    }, 300);
  }
  onChangeId(param: string) {
    this.id = param;
    this.KlikDozvola();
  }

  onChangeType(param: string) {
    this.type = param;
    this.KlikDozvola();
  }
  onChangeName(param: string) {
    this.name = param;
    this.KlikDozvola();
  }

  onChangeAdress(param: string) {
    this.adress = param;
    this.KlikDozvola();
  }

  onChangeLon(param: string) {
    this.Lon = param;
    this.KlikDozvola();
  }

  onChangeLat(param: string) {
    this.Lat = param;
    this.KlikDozvola();
  }

  KlikDozvola() {
    if (
      this.id != '' &&
      this.type != '' &&
      this.name != '' &&
      this.adress != '' &&
      this.Lon != '' &&
      this.Lat != ''
    ) {
      this.dozvola = true;
    } else {
      this.dozvola = false;
    }
  }
}
