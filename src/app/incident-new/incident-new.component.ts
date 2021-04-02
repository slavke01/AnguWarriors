import { Component, OnInit } from '@angular/core';
//import { stat } from 'node:fs';

@Component({
  selector: 'app-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.css']
})
export class IncidentNewComponent implements OnInit {

  incId=null;
  type=null;
  conf=null;
  status=null;
  desc=null;
  eta=null;
  ata=null;
  affectedCustomers=null;
  outageTime=null;
  etr=null;
  calls=null;
  voltage=null;
  scheduledTime=null;

  onChangeIncId(param:string){
    this.incId=param;
  }

  onChangeType(param:string){
    this.type=param;
  }

  onChangeConfTrue(){
    this.conf=true;
  }

  onChangeConfFalse(){
    this.conf=false;
  }

  onChangeStatus(param:string){
    this.status=param;
  }

  onChangeDesc(param:string){
    this.desc=param;
  }

  onChangeEta(param:string){
    this.eta=param;
  }

  onChangeAta(param:string){
    this.ata=param;
  }

  onChangeAffectedCustomers(param:string){
    this.affectedCustomers=param;
  }

  onChangeOutageTime(param:string){
    this.outageTime=param;
  }

  onChangeEtr(param:string){
    this.etr=param;
  }

  onChangeCalls(param:string){
    this.calls=param;
  }

  onChangeVoltage(param:string){
    this.voltage=param;
  }

  onChangeScheduledTime(param:string){
    this.scheduledTime=param;
  }

  gotovoFja(){
    console.log(this.incId);
    console.log(this.type);
    console.log(this.conf);
    console.log(this.status);
    console.log(this.desc);
    console.log(this.eta);
    console.log(this.ata);
    console.log(this.affectedCustomers);
    console.log(this.outageTime);
    console.log(this.etr);
    console.log(this.calls);
    console.log(this.voltage);
    console.log(this.scheduledTime);
  }


  niz=["1","2","3"];

  constructor() { }

  ngOnInit(): void {
  }

}
