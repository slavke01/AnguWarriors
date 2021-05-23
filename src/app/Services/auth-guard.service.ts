import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
  }
  canActivate() {
    const token = localStorage.getItem("jwt");
    console.log(this.jwtHelper.decodeToken(token));
    if (token && !this.jwtHelper.isTokenExpired(token)){
      return true;
    }
   
    

    this.router.navigate(["/"]);
    return false;
  }
}
