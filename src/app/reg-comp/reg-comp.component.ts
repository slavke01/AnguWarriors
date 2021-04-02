import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reg-comp',
  templateUrl: './reg-comp.component.html',
  styleUrls: ['./reg-comp.component.css']
})
export class RegCompComponent implements OnInit {

  firstName=null;
  lastName=null;
  dateOfBirth=null;
  address=null;
  emailAddress=null;
  username=null;
  password=null;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFirstName(param:string){
    this.firstName=param;
  }

  onChangeLastName(param:string){
    this.lastName=param;
  }

  onChangeDateOfBirth(param:string){
    this.dateOfBirth=param;
  }

  onChangeAddress(param:string){
    this.address=param;
  }

  onChangeEmailAddress(param:string){
    this.emailAddress=param;
  }

  onChangeUsername(param:string){
    this.username=param;
  }

  onChangePassword(param:string){
    this.password=param;
  }

  metodaAjmo(){
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.dateOfBirth);
    console.log(this.address);
    console.log(this.emailAddress);
    console.log(this.username);
    console.log(this.password);
  }

}
