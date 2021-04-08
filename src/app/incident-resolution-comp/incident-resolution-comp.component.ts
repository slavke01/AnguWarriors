import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-resolution-comp',
  templateUrl: './incident-resolution-comp.component.html',
  styleUrls: ['./incident-resolution-comp.component.css']
})
export class IncidentResolutionCompComponent implements OnInit {

  constructor() { }
  selected_cause;
  selected_subcause;
  selected_construction;
  selected_material;
  cause=["Vrijeme","Ljudski faktor","Otkaz"];
  subcause=["Grmljavina","Snijeg","Led"]
  construction=["Podzemni","Nadzemni"];
  materijal=["Metal","Plastika","Guma"];
  onChangeCause(param:string){
   this.selected_cause=param;
    if(param==="Vrijeme"){
     
      this.subcause=["Grmljavina","Snijeg","Led"]
    }
    if(param==="Ljudski faktor"){
     
      this.subcause=["Radnik glup","Radnik doso preko veze","Radnik se zbunio"]
    }
    if(param==="Otkaz"){
   
      this.subcause=["Nema struje","Ne radi","Nema vode"]
    }
  }
  onChangeSubcause(param:string){
    this.selected_subcause=param;

  }


  onChangeConstruction(param:string){
    this.selected_construction=param;

  }

  onChangeMaterial(param:string){

    this.selected_material=param;

  }
  ngOnInit(): void {
  }

}
