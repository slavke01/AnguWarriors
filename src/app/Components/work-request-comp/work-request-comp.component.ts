import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'ol';
import { NalogRada } from '../../app.module';
import { CRUDService } from '../../Services/crud.service';
import { of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-work-request-comp',
  templateUrl: './work-request-comp.component.html',
  styleUrls: ['./work-request-comp.component.css']
})
export class WorkRequestCompComponent implements OnInit {

  data:NalogRada[]=[];
  
  displayedColumns: string[] = [
    'Id',
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
  showDelete=false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private crs:CRUDService,private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
    this.crs.getNalozi().subscribe((podatak: NalogRada[])=>{
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
  deleteRow(id:string){
    console.log(id)
    this.crs.deleteNalogRada(id).subscribe();
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
