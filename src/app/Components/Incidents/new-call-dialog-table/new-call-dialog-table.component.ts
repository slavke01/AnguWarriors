import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Inject,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogData, User } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-new-call-dialog-table',
  templateUrl: './new-call-dialog-table.component.html',
  styleUrls: ['./new-call-dialog-table.component.css'],
})
export class NewCallDialogTableComponent implements AfterViewInit {
  dataSource: MatTableDataSource<User>;
  data1: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private crs: CRUDService,
    public dialogRef: MatDialogRef<NewCallDialogTableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.crs.getAllCallers().subscribe((podatak: User[]) => {
      this.data1 = this.data1.concat(podatak);
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['Username', 'FirstName', 'LastName', 'Adresa','Pick'];

  ngAfterViewInit() {}
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

  pickMe(id: string) {
    this.dialogRef.close({ result: id });
  }
}
