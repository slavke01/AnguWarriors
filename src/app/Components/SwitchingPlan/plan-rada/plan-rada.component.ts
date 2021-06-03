import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { PlanRada } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-plan-rada',
  templateUrl: './plan-rada.component.html',
  styleUrls: ['./plan-rada.component.css']
})
export class PlanRadaComponent implements OnInit {
  data:PlanRada[]=[];
  displayedColumns: string[] = [
    'IdPlana',
    'DocumentType',
    'Status',
    'PocetakRada',
    'KrajRada',
    'Svrha',
    'Beleske',
    'Detalji',
    'Ulica',
    'Kompanija',
    'TelefonskiBroj',
    'CreatedBy'
  ];
  dataSource: MatTableDataSource<PlanRada>;
  showDelete=false;
  showEdit=false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private crs:CRUDService,private jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit(): void {
    this.crs.getPlanovi().subscribe((podatak: PlanRada[])=>{
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
            this.displayedColumns.push('Edit');
            this.showDelete=true;
            this.showEdit=true;
          }
  }
  deleteRow(id:string){
    console.log(id)
    this.crs.deletePlanRada(id).subscribe();
    window.location.reload();
  }
  editRow(id:string){

    this.router.navigate(['editplan'], { state: { example: id } });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
