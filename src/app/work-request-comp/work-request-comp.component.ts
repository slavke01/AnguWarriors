import { Component, OnInit } from '@angular/core';
import { NalogRada } from '../app.module';
import { CRUDService } from '../Services/crud.service';

@Component({
  selector: 'app-work-request-comp',
  templateUrl: './work-request-comp.component.html',
  styleUrls: ['./work-request-comp.component.css']
})
export class WorkRequestCompComponent implements OnInit {

  podaci:NalogRada[]=[];

  constructor(private crs:CRUDService) { }

  ngOnInit(): void {
    this.crs.getNalozi().subscribe((podatak: NalogRada[])=>{
      this.podaci=this.podaci.concat(podatak); 
      console.log(this.podaci);
    });
  }

  
}
