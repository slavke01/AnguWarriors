import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-work-request',
  templateUrl: './new-work-request.component.html',
  styleUrls: ['./new-work-request.component.css']
})
export class NewWorkRequestComponent implements OnInit {

  constructor() { }
  basic=false;
  historyChanges=false;
  multimedia=false;
  equipment=false;

  basicClicked(){
    this.basic=true;
    this.historyChanges=false;
    this.multimedia=false;
    this.equipment=false;
  }

  historyChangesClicked(){
    this.historyChanges=true;
    this.basic=false;
    this.multimedia=false;
    this.equipment=false;
  }

  multimediaClicked(){
    this.multimedia=true;
    this.historyChanges=false;
    this.basic=false;
    this.equipment=false;
  }

  equipmentClicked(){
    this.equipment=true;
    this.historyChanges=false;
    this.basic=false;
    this.multimedia=false;
  }

  ngOnInit(): void {
  }

}
