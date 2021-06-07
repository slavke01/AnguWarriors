import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EkipaDTO } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-new-crew-component',
  templateUrl: './new-crew-component.component.html',
  styleUrls: ['./new-crew-component.component.css'],
})
export class NewCrewComponentComponent implements OnInit {
  dozvola = false;
  idCrewCon = new FormControl('', [Validators.required]);
  nameCrewCon = new FormControl('', [Validators.required]);

  idCrew: string = '';
  crewName: string = '';

  added: string[] = [];

  all: string[] = [];

  constructor(private crs: CRUDService, private toastr: ToastrService,private router:Router) {
    this.crs.getFreeCrewMembers().subscribe((data: string[]) => {
      this.all = data;
    });
  }

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  getErrorMessageCrewID() {
    if (this.idCrewCon.hasError('required')) {
      return 'You must enter crews Id';
    }
  }

  getErrorMessageCrewName() {
    if (this.nameCrewCon.hasError('required')) {
      return 'You must enter crews name';
    }
    return '';
  }

  onChangeCrewId(param: string) {
    this.idCrew = param;
    this.KlikDozvola();
  }

  onChangeCrewName(param: string) {
    this.crewName = param;
    this.KlikDozvola();
  }
  metodaAjmo() {
    var ekipa: EkipaDTO = {
      idEkipe: this.idCrew,
      nazivEkipe: this.crewName,
      usersId: this.added,
    };
    console.log(JSON.stringify(ekipa));
    this.crs.createCrew(ekipa).subscribe(
      (response) => {
        this.toastr.success('Uspesno dodat ekipa', 'Success');
      },
      (err) => {
        this.toastr.error('Greska pri dodavanju ekipe', 'Eror');
      }
    );

    setTimeout(() => {
      this.router.navigate(['admin/crews']);
    }, 300);
  }
  KlikDozvola() {
    if (this.idCrew != '' && this.crewName != '') {
      this.dozvola = true;
    } else {
      this.dozvola = false;
    }
  }
}
