import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, Incident } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-work-req-dialog',
  templateUrl: './work-req-dialog.component.html',
  styleUrls: ['./work-req-dialog.component.css'],
})
export class WorkReqDialogComponent implements OnInit {
  data1: Incident[] = [];
  displayedColumns: string[] = ['ID', 'IncidentType', 'Status','Pick'];
  dataSource: MatTableDataSource<Incident>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private crs: CRUDService,
    public dialogRef: MatDialogRef<WorkReqDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.crs.getIncidents().subscribe((podatak: Incident[]) => {
      this.data1 = this.data1.concat(podatak);
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  pickMe(id:string){

    this.data.id=id;
    this.dialogRef.close({result:id});
  }
  ngOnInit(): void {}
}
