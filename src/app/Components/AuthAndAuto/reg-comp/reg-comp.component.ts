import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { equals } from 'ol/extent';
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';
import { User } from '../../../app.module';
import { AuthentificationService } from '../../../Services/authentification.service';
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
  repeatpasswordCon = new FormControl('', [Validators.required]);
  firstName: string = null;
  lastName: string = null;
  dateOfBirth: Date = null;
  address: string = null;
  emailAddress: string = null;
  username: string = null;
  password: string = null;
  repeatpassword: string = null;
  hide = true;
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
    return '';
  }
  getErrorMessageLastName() {
    if (this.lastNameCon.hasError('required')) {
      return 'You must enter your last name';
    }
    return '';
  }
  getErrorMessageUsername() {
    if (this.usernameCon.hasError('required')) {
      return 'You must enter your username';
    }
    return '';
  }
  getErrorMessagePassword() {
    if (this.passwordCon.hasError('required')) {
      return 'You must enter your password';
    }
    return '';
  }
  getErrorMessageRepeatPassword() {
    if (this.repeatpasswordCon.hasError('required')) {
      return 'You must repeat your password';
    }

    return this.repeatpasswordCon.hasError('DoesntMatch')
      ? 'Passwords dont match'
      : '';
  }
  getErrorMessageDate() {
    if (this.dateOfBirthCon.hasError('required')) {
      return 'You must chose a date';
    }
    return '';
  }
  getErrorMessageAddress() {
    if (this.dateOfBirthCon.hasError('required')) {
      return 'You must chose an address';
    }
    return '';
  }

  onChangeFirstName(param: string) {
    this.firstName = param;
  }

  onChangeLastName(param: string) {
    this.lastName = param;
  }

  onChangeDateOfBirth(param: Date) {
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
    if (this.password === this.repeatpassword) {
      this.repeatpasswordCon.setErrors(null);
    } else {
      this.repeatpasswordCon.setErrors({ DoesntMatch: true });
    }
  }
  onChangeRepeatPassword(param: string) {
    this.repeatpassword = param;
    if (this.password === this.repeatpassword) {
      this.repeatpasswordCon.setErrors(null);
    } else {
      this.repeatpasswordCon.setErrors({ DoesntMatch: true });
    }
  }

  constructor(
    private router: Router,
    private authService: AuthentificationService
  ) {}

  ngOnInit(): void {}

  metodaAjmo() {
 
    
      var user: User = {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        datumRodjenja: this.dateOfBirth,
        adress: this.address,
        eMail: this.emailAddress,
        userType:"CLAN",
        approved:false
      };
    
 
        console.log(user);
  

        this.authService.registerUser(user).subscribe();
  }
}
