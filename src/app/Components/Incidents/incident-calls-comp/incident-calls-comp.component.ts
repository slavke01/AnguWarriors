import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Call } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';






@Component({
  selector: 'app-incident-calls-comp',
  templateUrl: './incident-calls-comp.component.html',
  styleUrls: ['./incident-calls-comp.component.css']
})
export class IncidentCallsCompComponent implements AfterViewInit {

  data:Call[]=[] 

  constructor(private crs:CRUDService) { 

    crs.getCalls().subscribe((podaci:Call[])=>{this.dataSource = new MatTableDataSource(podaci);})
    
  }
  displayedColumns: string[] = [
    'username',
    'reason',
    'hazard',
    'comment',
  ];
  dataSource: MatTableDataSource<Call>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
