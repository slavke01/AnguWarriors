import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }
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
