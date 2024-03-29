import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from '../../../app.module';
import { AuthentificationService } from '../../../Services/authentification.service';

export interface UserHelp {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  eMail: string;
  adress: string;
  datumRodjenja: Date;
  userType: string;
  approved: boolean;
}

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  korisnik: UserHelp = {
    firstName: '',
    lastName: '',
    password: '',
    adress: '',
    userType: '',
    datumRodjenja: new Date(),
    username: '',
    eMail: '',
    approved: false,
  };
  x: string = 'djurdja';
  socialUser: SocialUser;
  socialLogged:boolean=false;
  constructor(
    private jwtHelper: JwtHelperService,
    private authService: AuthentificationService,
    private authService2: SocialAuthService
  ) {
    this.authService2.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(this.socialUser);
    });

   
    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var username =
      x['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];

    this.authService.getUser(username).subscribe((podatak: UserHelp) => {
      this.korisnik = podatak;
      console.log(this.korisnik);
    });
  }

  ngOnInit(): void {}
}
