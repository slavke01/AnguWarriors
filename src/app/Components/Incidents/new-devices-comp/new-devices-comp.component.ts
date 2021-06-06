import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Elementi } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

const data: Elementi[] = [];

@Component({
  selector: 'app-new-devices-comp',
  templateUrl: './new-devices-comp.component.html',
  styleUrls: ['./new-devices-comp.component.css'],
})
export class NewDevicesCompComponent implements AfterViewInit {
  constructor(
    private crudService: CRUDService,
    private jwtHelper: JwtHelperService
  ) {
    //this.dataSource = new MatTableDataSource(data);
  }
  showDelete = false;
  displayedColumns: string[] = ['id', 'name', 'type', 'lon', 'lat', 'adress'];
  dataSource: MatTableDataSource<Elementi>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.crudService.getElements().subscribe((podatak: Elementi[]) => {
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    const token = localStorage.getItem('jwt');
    var x = this.jwtHelper.decodeToken(token);
    var role =
      x['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    if (role == 'Admin') {
      this.displayedColumns.push('Delete');
      this.showDelete = true;
    }
  }

  deleteRow(id: string) {
    console.log(id);
    this.crudService.deleteDevice(id).subscribe();
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
