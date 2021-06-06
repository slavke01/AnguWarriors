import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, NalogRada } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-iskacuci-prozor-za-switching-plan',
  templateUrl: './iskacuci-prozor-za-switching-plan.component.html',
  styleUrls: ['./iskacuci-prozor-za-switching-plan.component.css']
})
export class IskacuciProzorZaSwitchingPlanComponent implements OnInit {


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
    'TelefonskiBroj',
    'Pick'
  ];


  dataSource: MatTableDataSource<NalogRada>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pickMe(id:string){

    this.dialogRef.close({result:id});
  }

  

  constructor(private crs:CRUDService,public dialogRef: MatDialogRef<IskacuciProzorZaSwitchingPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: DialogData) { }

  ngOnInit(): void {
    this.crs.getNalozi().subscribe((podatak: NalogRada[])=>{
      this.data=this.data.concat(podatak); 
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
       
      });
  }

}
