import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { changePassword } from 'src/app/app.module';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-settings-comp',
  templateUrl: './settings-comp.component.html',
  styleUrls: ['./settings-comp.component.css']
})
export class SettingsCompComponent implements OnInit {

  oldpasswordCon = new FormControl('', [Validators.required]);
  newpasswordCon = new FormControl('', [Validators.required]);
  repeatpasswordCon = new FormControl('', [Validators.required]);

  oldpassword: string = null;
  newpassword: string = null;
  repeatpassword: string = null;

  hide = true;
  constructor(private jwtHelper: JwtHelperService,private authService:AuthentificationService) { }

  ngOnInit(): void {
  }
  onChangeOldPassword(param:string){
      this.oldpassword=param;
  }



  onChangeNewPassword(param: string) {
    this.newpassword = param;
    if (this.newpassword === this.repeatpassword) {
      this.repeatpasswordCon.setErrors(null);
    } else {
      this.repeatpasswordCon.setErrors({ DoesntMatch: true });
    }
  }
  onChangeRepeatPassword(param: string) {
    this.repeatpassword = param;
    if (this.newpassword === this.repeatpassword) {
      this.repeatpasswordCon.setErrors(null);
    } else {
      this.repeatpasswordCon.setErrors({ DoesntMatch: true });
    }
  }

  getErrorMessageOldPassword() {
    if (this.oldpasswordCon.hasError('required')) {
      return 'You must enter your old password';
    }
    return '';
  }
  getErrorMessageNewPassword() {
    if (this.newpasswordCon.hasError('required')) {
      return 'You must enter your new password';
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
  submit(){
    const token = localStorage.getItem("jwt");
    var x =this.jwtHelper.decodeToken(token);
    var username = x["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

    var data:changePassword={
      username:username,
      oldPassword:this.oldpassword,
      newPassword:this.newpassword
    }
    this.authService.changePassword(data).subscribe()
  }
}
