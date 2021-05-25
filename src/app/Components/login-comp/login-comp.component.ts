import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthentificationService } from '../../Services/authentification.service';
import { Login, User } from '../../app.module';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  myUser=null;
  username=null;
  password=null;
  invalidLogin:boolean;
  federer="assets/rfl.jpg";
  show=true;
  constructor(private router: Router, private ase: AuthentificationService) {
   }

  ngOnInit(): void {
    this.show=true;
    this.ase.getUser("ccc").subscribe((podatak: User)=>{
      this.myUser=podatak;
      
  })
  

  }


  metodaNova(){
      var login:Login={
          Username:this.username,
          Password:this.password
      }
    var x = this.ase.login(login).subscribe(response=>{
      const token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      console.log(token);
      this.router.navigate(['/home']);
    }, err => {
      this.invalidLogin = true;
    });
  }

  onChangeUsername(param:string){
      this.username=param;
  }

  onChangePassword(param:string){
      this.password=param;
  }


}
