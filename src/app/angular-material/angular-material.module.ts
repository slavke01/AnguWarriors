import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field"
import{MatPaginatorModule}from "@angular/material/paginator"
import { MatInputModule } from "@angular/material/input"
import {MatIconModule} from "@angular/material/icon"
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChartsModule } from 'ng2-charts';

const MaterialComponents=[
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    MatSlideToggleModule,
    MatSelectModule
];

@NgModule({
  imports: [
   MaterialComponents,
  
  ],
  exports:[
    MaterialComponents,
 
  ]

})
export class AngularMaterialModule { }
