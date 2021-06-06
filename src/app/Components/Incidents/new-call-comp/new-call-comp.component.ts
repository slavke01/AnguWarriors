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
import { User } from 'src/app/app.module';
@Component({
  selector: 'app-new-call-comp',
  templateUrl: './new-call-comp.component.html',
  styleUrls: ['./new-call-comp.component.css'],
})
export class NewCallCompComponent implements OnInit {
  hidden=false;
  constructor(
    public dialog: MatDialog,
    private auth: AuthentificationService
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
}
