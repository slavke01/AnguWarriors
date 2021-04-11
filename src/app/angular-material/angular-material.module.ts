import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field"
import{MatPaginatorModule}from "@angular/material/paginator"
const MaterialComponents=[
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
];

@NgModule({
  imports: [
   MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]

})
export class AngularMaterialModule { }
