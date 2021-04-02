import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  username=null;
  password=null;

  constructor() { }

  ngOnInit(): void {


  }

  metodaNova(){
    console.log(this.username);
    console.log(this.password);
  }

  onChangeUsername(param:string){
      this.username=param;
  }

  onChangePassword(param:string){
      this.password=param;
  }


}
