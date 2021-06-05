import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/app.module';
import { AuthentificationService } from 'src/app/Services/authentification.service';

@Component({
  selector: 'app-approve-user',
  templateUrl: './approve-user.component.html',
  styleUrls: ['./approve-user.component.css']
})
export class ApproveUserComponent implements OnInit {
  data:User[]=[];

  displayedColumns: string[] = [
    'Username',
    'FirstName',
    'LastName',
    'Approve',
    'Decline'
  ];

  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private auth:AuthentificationService) { 

      this.auth.getUnaproved().subscribe((podatak: User[])=>{
        this.data=this.data.concat(podatak); 
        this.dataSource = new MatTableDataSource(podatak);
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
  ngOnInit(): void {
  }

   aprove(username:string){

      this.auth.approve(username).subscribe();
      console.log(username)
      window.location.reload();

   }
   decline(username:string){
    this.auth.decline(username).subscribe();
    window.location.reload();

  }
}
