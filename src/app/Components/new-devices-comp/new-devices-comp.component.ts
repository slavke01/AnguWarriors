import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface TableData {
  id: string;
  name: string;
  type: string;
  coordinates: string;
  adress: string;
}

const data: TableData[] = [
  {
    id: '1',
    name: 'danas',
    type: 'heh',
    coordinates: 'Cao',
    adress: 'Ftn',
  },
  {
    id: '2',
    name: 'danas',
    type: 'Tv',
    coordinates: 'Blizu',
    adress: 'Ftn',
  },
  {
    id: '3',
    name: 'danas',
    type: 'rucka',
    coordinates: 'tu negdje',
    adress: 'Ftn',
  },
  {
    id: '4',
    name: 'danas',
    type: 'brava',
    coordinates: 'Nije blizu',
    adress: 'Ftn',
  },
  {
    id: '5',
    name: 'danas',
    type: 'prekidac',
    coordinates: 'bas daleko',
    adress: 'Ftn',
  },
  {
    id: '6',
    name: 'danas',
    type: 'osigurac',
    coordinates: 'daleko',
    adress: 'Ftn',
  },
];

@Component({
  selector: 'app-new-devices-comp',
  templateUrl: './new-devices-comp.component.html',
  styleUrls: ['./new-devices-comp.component.css'],
})
export class NewDevicesCompComponent implements AfterViewInit {
  constructor() {
    this.dataSource = new MatTableDataSource(data);
  }
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'coordinates',
    'adress',
  ];
  dataSource: MatTableDataSource<TableData>;

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
