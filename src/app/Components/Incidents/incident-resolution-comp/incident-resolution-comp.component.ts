import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Poruka, Resolution } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-incident-resolution-comp',
  templateUrl: './incident-resolution-comp.component.html',
  styleUrls: ['./incident-resolution-comp.component.css'],
})
export class IncidentResolutionCompComponent implements OnInit {
  constructor(
    private CrudService: CRUDService,
    private jwtHelper: JwtHelperService,
    private toastr: ToastrService
  ) {}
  cause = ['Vrijeme', 'Ljudski faktor', 'Otkaz'];
  subcause = ['Grmljavina', 'Snijeg', 'Led'];
  construction = ['Podzemni', 'Nadzemni'];
  materijal = ['Metal', 'Plastika', 'Guma'];
  selected_cause=this.cause[0];
  selected_subcause=this.subcause[0];
  selected_construction=this.construction[0];
  selected_material=this.materijal[0];

  onChangeCause(param: string) {
    this.selected_cause = param;
    if (param === 'Vrijeme') {
      this.subcause = ['Grmljavina', 'Snijeg', 'Led'];
    }
    if (param === 'Ljudski faktor') {
      this.subcause = [
        'Radnik glup',
        'Radnik doso preko veze',
        'Radnik se zbunio',
      ];
    }
    if (param === 'Otkaz') {
      this.subcause = ['Nema struje', 'Ne radi', 'Nema vode'];
    }
  }
  onChangeSubcause(param: string) {
    this.selected_subcause = param;
  }

  onChangeConstruction(param: string) {
    this.selected_construction = param;
  }

  onChangeMaterial(param: string) {
    this.selected_material = param;
  }
  ngOnInit(): void {}

  submit() {
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    let resolution: Resolution = {
      idRes: '',
      cause: this.selected_cause,
      subCause: this.selected_subcause,
      construction: this.selected_construction,
      material: this.selected_material,
    };

    this.CrudService.createResolution(resolution).subscribe(
      (response) => {
        this.toastr.success('Uspesno dodat nalog', 'Success');
        var poruka: Poruka = {
          idKorisnika: username,
          sadrzaj: 'Uspesno dodat resolution',
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
  }
}
