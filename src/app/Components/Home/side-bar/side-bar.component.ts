import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  showLjudi:boolean=false;
  
  constructor(private jwtHelper:JwtHelperService) {
    const token = localStorage.getItem("jwt");
    var x =this.jwtHelper.decodeToken(token);
    var role = x["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if(role=='Admin')
    {
      this.showLjudi=true;
    }
   }

  show:boolean=false;
  ngOnInit(): void {
  }
  logOut() {
    localStorage.removeItem("jwt");
    
 }
 showPersonal(){

  this.show=!this.show;
  console.log(this.show)
 }
}
