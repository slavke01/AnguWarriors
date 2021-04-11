import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface TableData {
  id: string;
  startDate: string;
  phoneNo: string;
  status: string;
  adress: string;
}
const data:TableData[] = [
  {
    id: '1',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '2',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '3',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '4',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '5',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '6',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '7',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '8',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '9',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
  {
    id: '10',
    startDate: 'danas',
    phoneNo: '123-123-123',
    status: 'Pokvareno',
    adress: 'Ftn',
  },
];
@Component({
  selector: 'app-incidents-comp',
  templateUrl: './incidents-comp.component.html',
  styleUrls: ['./incidents-comp.component.css'],
})
export class IncidentsCompComponent implements AfterViewInit  {
  displayedColumns: string[] = [
    'id',
    'startDate',
    'phoneNo',
    'status',
    'adress',
  ];
  dataSource: MatTableDataSource<TableData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 
  constructor() {

    this.dataSource = new MatTableDataSource(data);
  }

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
