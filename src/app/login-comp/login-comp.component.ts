import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  username=null;
  password=null;
  federer="assets/rfl.jpg";
  show=true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.show=true;

  }

  


  metodaNova(){
    console.log(this.username);
    console.log(this.password);
    this.router.navigate(['/home']);
  }

  onChangeUsername(param:string){
      this.username=param;
  }

  onChangePassword(param:string){
      this.password=param;
  }


}
