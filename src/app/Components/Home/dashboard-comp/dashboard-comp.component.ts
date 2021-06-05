import { Component, OnInit } from '@angular/core';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { CRUDService } from 'src/app/Services/crud.service';
@Component({
  selector: 'app-dashboard-comp',
  templateUrl: './dashboard-comp.component.html',
  styleUrls: ['./dashboard-comp.component.css']
})
export class DashboardCompComponent implements OnInit {
  public chartTypePie: string = 'pie';
  public chartTypeLine: string = 'line';


  nizSvegaISvacega:number[]=[]

  chartDatasetsPie: Array<any>=[{data:[],label:""}]
  chartDatasetsLine: Array<any>=[{data:[],label:""},{data:[],label:""}]

  constructor(private crs:CRUDService) {

    this.crs.getAllByUsername().subscribe((sve:number[])=>{this.nizSvegaISvacega=sve; console.log(sve);  this.chartDatasetsPie= [
      { data: sve, label: 'Pregled:' }
    ];});
  
    
    this.crs.getIncidentsForChart().subscribe((sve:any)=> {this.chartDatasetsLine=[
      { data: sve[0], label: 'Planirani' },
      { data: sve[1], label: 'Neplanirani' }
    ];})


   }

   

   

  public chartLabelsPie: Array<any> = ['Incidents', 'Work requests', 'Switching plans', 'Safety Documents'];

  public chartColorsPie: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5'],
      borderWidth: 2,
    }
  ];
 
  public chartLabelsLine: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];

  public chartColorsLine: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];


  public chartOptionsPie: any = {
    responsive: true
  };
  public chartOptionsLine: any = {
    responsive: true
  };
  public chartClickedPie(e: any): void { }
  public chartHoveredPie(e: any): void { }
  public chartClickedLine(e: any): void { }
  public chartHoveredLine(e: any): void { }
  

  ngOnInit(): void {
    
  }

}
