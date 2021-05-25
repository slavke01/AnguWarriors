import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CRUDService } from 'src/app/Services/crud.service';
import { Elementi } from '../../app.module';
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

  constructor(private crudService:CRUDService) {}

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


    dodajElement(){
      var element:Elementi={
        Id:this.id,
        Naziv:this.name,
        ElementType:this.type,
        Adress:this.adress,
        Longitude:this.Lon,
        Latitude:this.Lat
    }
      console.log(element);
      this.crudService.createElement(element).subscribe();

    }
  onChangeId(param: string) {
    this.id = param;
  }

  onChangeType(param: string) {
    this.type = param;
  }
  onChangeName(param: string) {
    this.name = param;
  }

  onChangeAdress(param: string) {
    this.adress = param;
  }

  onChangeLon(param: string) {
    this.Lon = param;
  }

  onChangeLat(param: string) {
    this.Lat = param;
  }
}
