import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Ekipa, User } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-crew-component',
  templateUrl: './crew-component.component.html',
  styleUrls: ['./crew-component.component.css']
})
export class CrewComponentComponent implements OnInit {
  data:Ekipa[]=[];
  crewmembers:User[]=[];
  showData:boolean=false;
  displayedColumns: string[] = [
    'IdEkipe',
    'NazivEkipe',
    'Delete',
    'Show'
  ];

  dataSource: MatTableDataSource<Ekipa>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private crs:CRUDService) {
    this.crs.getCrews().subscribe((podatak: Ekipa[])=>{
      this.data=this.data.concat(podatak); 
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });

   }

  ngOnInit(): void {
  }
  decline(id:string){
    this.crs.deleteCrew(id).subscribe();
    window.location.reload();

  }
  show(id:string){
this.crs.getCrewMembers(id).subscribe((data:User[])=>{

this.crewmembers=data;
this.showData=true;
});

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
