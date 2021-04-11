import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-new-call-comp',
  templateUrl: './new-call-comp.component.html',
  styleUrls: ['./new-call-comp.component.css'],
})
export class NewCallCompComponent implements OnInit {
  constructor() {}

  reason = '';
  comment = '';
  hazard = '';
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