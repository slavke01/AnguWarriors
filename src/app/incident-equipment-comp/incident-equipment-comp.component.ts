import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-equipment-comp',
  templateUrl: './incident-equipment-comp.component.html',
  styleUrls: ['./incident-equipment-comp.component.css']
})
export class IncidentEquipmentCompComponent implements OnInit {

  constructor() { }


  id="";
  tip="";
  naziv="";
  adresa="";
  koordinate="";


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
