import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-comp',
  templateUrl: './reg-comp.component.html',
  styleUrls: ['./reg-comp.component.css'],
})
export class RegCompComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  firstNameCon = new FormControl('', [Validators.required]);
  lastNameCon = new FormControl('', [Validators.required]);
  dateOfBirthCon = new FormControl('', [Validators.required]);
  addressCon = new FormControl('', [Validators.required]);
  usernameCon = new FormControl('', [Validators.required]);
  passwordCon = new FormControl('', [Validators.required]);

  getErrorMessageEmail() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getErrorMessageFirstName() {
    if (this.firstNameCon.hasError('required')) {
      return 'You must enter your First name';
    }
    if (this.lastNameCon.hasError('required')) {
      return 'You must enter your last name';
    }
    return "";
  }
  getErrorMessageLastName() {
    
    if (this.lastNameCon.hasError('required')) {
      return 'You must enter your last name';
    }
    return "";
  }
  getErrorMessageUsername() {
    if (this.usernameCon.hasError('required')) {
      return 'You must enter your username';
    }
    return "";
  }
  getErrorMessagePassword() {
    if (this.usernameCon.hasError('required')) {
      return 'You must enter your password';
    }
    return "";
  }

  getErrorMessageDate() {
    if (this.dateOfBirthCon.hasError('required')) {
      return 'You must chose a date';
    }
    return "";
  }
  getErrorMessageAddress() {
    if (this.dateOfBirthCon.hasError('required')) {
      return 'You must chose an address';
    }
    return "";
  }
  firstName = null;
  lastName = null;
  dateOfBirth = null;
  address = null;
  emailAddress = null;
  username = null;
  password = null;
  hide = true;
  constructor() {}

  ngOnInit(): void {}

  onChangeFirstName(param: string) {
    this.firstName = param;
  }

  onChangeLastName(param: string) {
    this.lastName = param;
  }

  onChangeDateOfBirth(param: string) {
    this.dateOfBirth = param;
  }

  onChangeAddress(param: string) {
    this.address = param;
  }

  onChangeEmailAddress(param: string) {
    this.emailAddress = param;
  }

  onChangeUsername(param: string) {
    this.username = param;
  }

  onChangePassword(param: string) {
    this.password = param;
  }

  metodaAjmo() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.dateOfBirth);
    console.log(this.address);
    console.log(this.emailAddress);
    console.log(this.username);
    console.log(this.password);
  }
}
