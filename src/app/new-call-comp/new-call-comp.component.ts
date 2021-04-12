import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewCallDialogTableComponent } from '../new-call-dialog-table/new-call-dialog-table.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-new-call-comp',
  templateUrl: './new-call-comp.component.html',
  styleUrls: ['./new-call-comp.component.css'],
})
export class NewCallCompComponent implements OnInit {
  constructor(public dialog:MatDialog){}
  reason = '';
  comment = '';
  hazard = '';


  openDialog(){

    this.dialog.open(NewCallDialogTableComponent);

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
