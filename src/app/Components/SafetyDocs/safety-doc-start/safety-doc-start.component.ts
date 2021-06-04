import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SafetyDoc } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-safety-doc-start',
  templateUrl: './safety-doc-start.component.html',
  styleUrls: ['./safety-doc-start.component.css']
})
export class SafetyDocStartComponent implements OnInit {


  data:SafetyDoc[]=[];

  displayedColumns: string[] = [
    'Id',
    'Status',
    'Detalji',
    'Beleske',
    'TelefonskiBroj',
    'CreatedBy',
    'SafetyType'
    
  ];

  dataSource: MatTableDataSource<SafetyDoc>;
  showDelete=false;
  showEdit=false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private crs:CRUDService,private jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit(): void {

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
    //this.crs.deleteNalogRada(id).subscribe();
    window.location.reload();
  }
  editRow(id:string){

    this.router.navigate(['editnalog'], { state: { example: id } });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
