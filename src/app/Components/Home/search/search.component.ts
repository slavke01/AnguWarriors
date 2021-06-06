import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchid="";
response:string[]=[]
  constructor(private crs:CRUDService) { }

  ngOnInit(): void {


  
  }

search(id:string){

this.crs.getSearch(id).subscribe((data)=>{
console.log(data);
this.response=data;
});
}
}