import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../app.module';
import { AuthentificationService } from '../Services/authentification.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private jwtHelper: JwtHelperService,private authService:AuthentificationService) { }
  korisnik:User;
  ngOnInit(): void {
    const token = localStorage.getItem("jwt");
    var x =this.jwtHelper.decodeToken(token);
    var username = x["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
      this.authService.getUser(username).subscribe((podatak: User)=>{
          this.korisnik=podatak;
      console.log(this.korisnik)

      });

  }
}
