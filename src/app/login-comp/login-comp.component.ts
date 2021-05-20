import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { AuthentificationService } from '../Services/authentification.service';
import { User } from '../app.module';


@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  myUser=null;
  username=null;
  password=null;
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

    this.router.navigate(['/home']);
  }

  onChangeUsername(param:string){
      this.username=param;
  }

  onChangePassword(param:string){
      this.password=param;
  }


}
