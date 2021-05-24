import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'ol';
import { Incident } from '../../app.module';
import { CRUDService } from '../../Services/crud.service';
import { of } from 'rxjs';


@Component({
  selector: 'app-incidents-comp',
  templateUrl: './incidents-comp.component.html',
  styleUrls: ['./incidents-comp.component.css'],
})
export class IncidentsCompComponent implements AfterViewInit  {
  data:Incident[] = [];
  x;
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

 
  constructor(private crudService:CRUDService) {
    this.crudService.getIncidents().subscribe((podatak: Incident[])=>{
      this.x=of(podatak);
      console.log(podatak);
    });
    
    
    
   
  }
 
  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
