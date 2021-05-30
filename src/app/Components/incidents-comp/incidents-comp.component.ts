import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'ol';
import { Incident } from '../../app.module';
import { CRUDService } from '../../Services/crud.service';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-incidents-comp',
  templateUrl: './incidents-comp.component.html',
  styleUrls: ['./incidents-comp.component.css'],
})
export class IncidentsCompComponent implements AfterViewInit  {
  data:Incident[] = [];
  x;
  showDelete=false;
  isDataLoaded=false;
  displayedColumns: string[] = [
    'ID',
    'IncidentType',
    'Prioritet',
    'Confirmed',
    'Status',
    'ETA',
    'ATA',
    'ETR',
    'VrijemeRada',
    'AffectedPeople',
    'Pozivi',
    'Voltage'
   
  ];
  dataSource: MatTableDataSource<Incident>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 
  constructor(private crudService:CRUDService,private jwtHelper: JwtHelperService) {
    this.crudService.getIncidents().subscribe((podatak: Incident[])=>{
      this.data=this.data.concat(podatak); 
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    
    });
    const token = localStorage.getItem("jwt");
    var x =this.jwtHelper.decodeToken(token);
    var role = x["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if(role=="Admin"){
          this.displayedColumns.push('Delete');
          this.showDelete=true;


        }
   
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteRow(id:string){
    console.log(id)
    this.crudService.deleteIncident(id).subscribe();
    window.location.reload();
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
