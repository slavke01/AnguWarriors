import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DialogData, PlanRada } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';
import { IskacuciProzorZaEkipuUPlanuComponent } from '../../SwitchingPlan/iskacuci-prozor-za-ekipu-uplanu/iskacuci-prozor-za-ekipu-uplanu.component';

@Component({
  selector: 'app-safetydocdialog',
  templateUrl: './safetydocdialog.component.html',
  styleUrls: ['./safetydocdialog.component.css'],
})
export class SafetydocdialogComponent implements OnInit {
  data: PlanRada[] = [];
  displayedColumns: string[] = [
    'IdPlana',
    'Status',
    'Beleske',
    'Detalji',
    'Ulica',
    'Kompanija',
    'TelefonskiBroj',
    'Pick'
  ];
  dataSource: MatTableDataSource<PlanRada>;
  showDelete = false;
  showEdit = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private crs: CRUDService,
    public dialogRef: MatDialogRef<IskacuciProzorZaEkipuUPlanuComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: DialogData,
    private router: Router
  ) {
    this.crs.getPlanovi().subscribe((podatak: PlanRada[]) => {
      this.data = this.data.concat(podatak);
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

  onNoClick(): void {
    this.dialogRef.close();
  }
  pick(id: string) {
    this.dialogRef.close({ result: id });
  }
  ngOnInit(): void {}
}
