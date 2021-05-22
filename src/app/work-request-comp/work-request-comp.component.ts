import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'ol';
import { NalogRada } from '../app.module';
import { CRUDService } from '../Services/crud.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-work-request-comp',
  templateUrl: './work-request-comp.component.html',
  styleUrls: ['./work-request-comp.component.css']
})
export class WorkRequestCompComponent implements AfterViewInit {

  data:NalogRada[]=[];
  
  displayedColumns: string[] = [
    'NalogType',
    'Status',
    'PocetakRada',
    'KrajRada',
    'Svrha',
    'Beleske',
    'Hitno',
    'Kompanija',
    'TelefonskiBroj'
  ];

  dataSource: MatTableDataSource<NalogRada>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private crs:CRUDService) { }

  ngAfterViewInit(): void {
    this.crs.getNalozi().subscribe((podatak: NalogRada[])=>{
      this.data=this.data.concat(podatak); 
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

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
