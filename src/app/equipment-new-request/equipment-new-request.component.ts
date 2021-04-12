import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-new-request',
  templateUrl: './equipment-new-request.component.html',
  styleUrls: ['./equipment-new-request.component.css']
})
export class EquipmentNewRequestComponent implements OnInit {
  id="";
  tip="";
  naziv="";
  adresa="";
  koordinate="";
  constructor() { }
  onButtonClick(){
    this.id="1";
    this.tip="Pokvarilo se";
    this.naziv="glupko";
    this.adresa="Daleko";
    this.koordinate="postoje";
  }
  ngOnInit(): void {
  }

}
