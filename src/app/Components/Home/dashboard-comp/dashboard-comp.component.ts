import { Component, OnInit } from '@angular/core';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-dashboard-comp',
  templateUrl: './dashboard-comp.component.html',
  styleUrls: ['./dashboard-comp.component.css']
})
export class DashboardCompComponent implements OnInit {
  public chartTypePie: string = 'pie';
  public chartTypeLine: string = 'line';


  public chartDatasetsPie: Array<any> = [
    { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  ];

  public chartLabelsPie: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColorsPie: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];
  public chartDatasetsLine: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];
  public chartLabelsLine: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

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
  constructor() { }

  ngOnInit(): void {
    
  }

}
