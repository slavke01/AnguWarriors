import { Component, OnInit } from '@angular/core';
//import { stat } from 'node:fs';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-incident-new',
  templateUrl: './incident-new.component.html',
  styleUrls: ['./incident-new.component.css']
})
export class IncidentNewComponent implements OnInit {
  IncIDCon = new FormControl('', [Validators.required]);
  StatusCon = new FormControl('', [Validators.required]);
  DescriptionCon = new FormControl('', [Validators.required]);
  AffCusCon = new FormControl('', [Validators.required]);
  CallsCon = new FormControl('', [Validators.required]);
  VoltageCon = new FormControl('', [Validators.required]);
  ETACon = new FormControl('', [Validators.required]);
  ATACon = new FormControl('', [Validators.required]);
  ETRCon = new FormControl('', [Validators.required]);
  SchTimeCon = new FormControl('', [Validators.required]);
  OutageTimeCon = new FormControl('', [Validators.required]);
  TypeCon = new FormControl('', [Validators.required]);
  niz=["1","2","3"];
  incId=null;
  type=this.niz[0];
  isChecked = true;
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
  getErrorMessageIncID() {
    
    if (this.IncIDCon.hasError('required')) {
      return 'You must enter Incident ID';
    }
    return "";
  }
  getErrorMessageStatus() {
    
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Status';
    }
    return "";
  }
  getErrorMessageDescription() {
    
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Description';
    }
    return "";
  }
  getErrorMessageAffectedCustomers() {
    
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Description';
    }
    return "";
  }
  getErrorMessageCalls() {
    
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Calls';
    }
    return "";
  }
  getErrorMessageVoltage() {
    
    if (this.StatusCon.hasError('required')) {
      return 'You must enter Voltage';
    }
    return "";
  }
  getErrorMessageETA() {
    if (this.ETACon.hasError('required')) {
      return 'You must chose an ETA';
    }
    return "";
  }
  getErrorMessageATA() {
    if (this.ATACon.hasError('required')) {
      return 'You must chose an ATA';
    }
    return "";
  }
  getErrorMessageETR() {
    if (this.ETRCon.hasError('required')) {
      return 'You must chose an ETR';
    }
    return "";
  }
  getErrorMessageSchTime() {
    if (this.ETRCon.hasError('required')) {
      return 'You must chose Scheduled Time';
    }
    return "";
  }
  getErrorMessageOutageTime() {
    if (this.ETRCon.hasError('required')) {
      return 'You must chose Outage Time';
    }
    return "";
  }
  getErrorMessageType() {
    if (this.TypeCon.hasError('required')) {
      return 'You must chose a Type';
    }
    return "";
  }
  onChangeIncId(param:string){
    this.incId=param;
  }

  onChangeType(param:string){

    console.log("AAAAAAAAAAAAAAAAAAA");
    this.type=param;
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
    console.log(this.isChecked);
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


  

  constructor() { }

  ngOnInit(): void {
  }

}
