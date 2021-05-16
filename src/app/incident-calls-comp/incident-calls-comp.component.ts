import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


export interface TableData {
  id: string;
  reason: string;
  hazard: string;
  comment: string;

}

const data: TableData[] = [
  {
    id: '1',
    reason: 'danas',
    hazard: 'heh',
    comment: 'Cao',
    
  },{
    id: '6',
    reason: 'danas',
    hazard: 'heh',
    comment: 'Cao',
    
  },
  {
    id: '4',
    reason: 'danas',
    hazard: 'heh',
    comment: 'Cao',
    
  },{
    id: '9',
    reason: 'danas',
    hazard: 'heh',
    comment: 'Cao',
    
  },{
    id: '11',
    reason: 'danas',
    hazard: 'heh',
    comment: 'Cao',
    
  },{
    id: '16',
    reason: 'danas',
    hazard: 'heh',
    comment: 'Cao',
    
  },



];

@Component({
  selector: 'app-incident-calls-comp',
  templateUrl: './incident-calls-comp.component.html',
  styleUrls: ['./incident-calls-comp.component.css']
})
export class IncidentCallsCompComponent implements AfterViewInit {

  constructor() { 
    this.dataSource = new MatTableDataSource(data);
  }
  displayedColumns: string[] = [
    'id',
    'reason',
    'hazard',
    'comment',
  ];
  dataSource: MatTableDataSource<TableData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
