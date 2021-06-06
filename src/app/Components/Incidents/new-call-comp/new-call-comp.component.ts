import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { NewCallDialogTableComponent } from '../new-call-dialog-table/new-call-dialog-table.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CRUDService } from 'src/app/Services/crud.service';
import { AuthentificationService } from 'src/app/Services/authentification.service';
import { Call, Poruka, User } from 'src/app/app.module';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-new-call-comp',
  templateUrl: './new-call-comp.component.html',
  styleUrls: ['./new-call-comp.component.css'],
})
export class NewCallCompComponent implements OnInit {
  hidden=false;
  constructor(
    public dialog: MatDialog,
    private auth: AuthentificationService,
    private crs:CRUDService,
    private router:Router,
    private toastr: ToastrService,
    private jwtHelper:JwtHelperService

  ) {}
  reason = '';
  comment = '';
  hazard = '';
  username: '';
  korisnik: User = {
    firstName: '',
    lastName: '',
    password: '',
    adress: '',
    userType: '',
    datumRodjenja: new Date(),
    username: '',
    eMail: '',
    approved: false,
  };
  openDialog() {
    const dialogRef = this.dialog.open(NewCallDialogTableComponent, {
      width: '1000px',
      height: '400px',
      data: { id: this.username },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.username = result['result'];

      this.auth.getUser(this.username).subscribe((data: User) => {
        this.korisnik = data;
        this.hidden=true;
      });
    });
  }
  onChangeReason(param: string) {
    this.reason = param;
  }
  onChangeComment(param: string) {
    this.comment = param;
  }
  onChangeHazard(param: string) {
    this.hazard = param;
  }
  ngOnInit(): void {}


  posaljdeCall(){
      let c:Call = {
        razlog:this.reason,
      komentar:this.comment,
      kvar:this.hazard,
      usernameKor:this.username
      }
      const token = localStorage.getItem('jwt');
      var x = this.jwtHelper.decodeToken(token);
      var username =
        x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.crs.createCall(c).subscribe((response) => {
        this.toastr.success('Uspesno dodat poziv', 'Success');
        var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Uspesno dodat poziv",
          procitana:false,
          tip:"Success",
          idPoruke:""
      }

      this.crs.createMessage(poruka).subscribe();
      },
      (err) => {
        this.toastr.error('Greska pri dodavanju poziva', 'Eror');
        var poruka:Poruka={
          idKorisnika:username,
          sadrzaj:"Greska pri dodavanju poziva",
          procitana:false,
          tip:"Error",
          idPoruke:""
      }

      this.crs.createMessage(poruka).subscribe();
      });
      setTimeout(() => {
        this.router.navigate(['new/calls']);
      }, 300);

  }
}
