import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-information-work-request',
  templateUrl: './basic-information-work-request.component.html',
  styleUrls: ['./basic-information-work-request.component.css']
})
export class BasicInformationWorkRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  type=null;
  startTime=null;
  endTime=null;
  emergency=null;
  company=null;
  phoneNo=null;
  dateTimeCreated=null;
  purpose=null;
  details=null;
  notes=null;

  tipovi=["Planned work","Unplanned work"]
  tipoviWork=["work1","work2","work3"]

  onChangeType(param:string){
    this.type=param;
  }

  onChangeStartTime(param:string){
    this.startTime=param;
  }

  onChangeEndTime(param:string){
    this.endTime=param;
  }

  onChangeEmTrue(){
    this.emergency=true;
  }

  onChangeEmFalse(){
    this.emergency=false;
  }

  onChangeCompany(param:string){
    this.company=param;
  }

  onChangePhoneNo(param:string){
    this.phoneNo=param;
  }

  onChangeCreatedTime(param:string){
    this.dateTimeCreated=param;
  }

  onChangePurpose(param:string){
    this.purpose=param;
  }
  onChangeDetails(param:string){
    this.details=param;
  }
  onChangeNotes(param:string){
    this.notes=param;
  }

}
