import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface TableData {
  name: string;
  lastName: string;
  Account: number;
  Adresa: string;
  Prioritet:string;

}

const data:TableData[] = [
  {
    name: 'Mirko1',
    lastName: 'Mirkovic',
    Account: 12345,
    Adresa: 'NS',
    Prioritet: 'nema',
  },
  {
    name: 'Mirko2',
    lastName: 'Mirkovic',
    Account: 12345,
    Adresa: 'NS',
    Prioritet: 'nema',
  },
  {
    name: 'Mirko3',
    lastName: 'Mirkovic',
    Account: 12345,
    Adresa: 'NS',
    Prioritet: 'nema',
  },
];


@Component({
  selector: 'app-new-call-dialog-table',
  templateUrl: './new-call-dialog-table.component.html',
  styleUrls: ['./new-call-dialog-table.component.css'],
})
export class NewCallDialogTableComponent implements AfterViewInit {
  dataSource: MatTableDataSource<TableData>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    this.dataSource = new MatTableDataSource(data);
  }

  displayedColumns: string[] = [
    'name',
    'lastName',
    'Account',
    'Adresa',
    'Prioritet'
  ];


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
