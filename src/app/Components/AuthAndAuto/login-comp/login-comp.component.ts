import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../../Services/authentification.service';
import { Login, User } from '../../../app.module';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { ToastrService } from 'ngx-toastr';
const RSA_PRIVATE_KEY="superSecretKey@345";

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css'],
})
export class LoginCompComponent implements OnInit {
  myUser = null;
  username = null;
  password = null;
  invalidLogin: boolean;
  federer = 'assets/rfl.jpg';
  show = true;
  constructor(
    private router: Router,
    private ase: AuthentificationService,
    private authService: SocialAuthService,
    private toastr: ToastrService

  ) {}
  socialUser: SocialUser;
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(this.socialUser);
    });
    this.ase.getToken(this.socialUser["name"]).subscribe((response)=>{

      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      console.log(token);
      this.router.navigate(['/home']);


    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  ngOnInit(): void {
    this.show = true;
    this.ase.getUser('ccc').subscribe((podatak: User) => {
      this.myUser = podatak;
    });
  }

  metodaNova() {
    var login: Login = {
      Username: this.username,
      Password: this.password,
    };
    var x = this.ase.login(login).subscribe(
      (response) => {
        const token = (<any>response).token;
        localStorage.setItem('jwt', token);
        this.invalidLogin = false;
        console.log(token);
        this.toastr.success("Uspesno ulogovan","Success");
        this.router.navigate(['/home']);
      },
      (err) => {
        this.invalidLogin = true;
        this.toastr.error("Greska pri logovanju","Eror");
      }
    );
  }

  onChangeUsername(param: string) {
    this.username = param;
  }

  onChangePassword(param: string) {
    this.password = param;
  }
}
