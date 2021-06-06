import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData, Ekipa, User } from 'src/app/app.module';
import { CRUDService } from 'src/app/Services/crud.service';

@Component({
  selector: 'app-iskacuci-prozor-za-ekipu-uplanu',
  templateUrl: './iskacuci-prozor-za-ekipu-uplanu.component.html',
  styleUrls: ['./iskacuci-prozor-za-ekipu-uplanu.component.css'],
})
export class IskacuciProzorZaEkipuUPlanuComponent implements OnInit {
  data: Ekipa[] = [];
  crewmembers: User[] = [];
  showData: boolean = false;
  displayedColumns: string[] = ['IdEkipe', 'NazivEkipe', 'Pick'];

  dataSource: MatTableDataSource<Ekipa>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private crs: CRUDService,
    public dialogRef: MatDialogRef<IskacuciProzorZaEkipuUPlanuComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: DialogData
  ) {
    this.crs.getCrews().subscribe((podatak: Ekipa[]) => {
      this.data = this.data.concat(podatak);
      this.dataSource = new MatTableDataSource(podatak);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pickMe(id: string) {
    this.dialogRef.close({ result: id });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {}
}
