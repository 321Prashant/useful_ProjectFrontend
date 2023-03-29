import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  title = 'Average annual software developer salary';


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [20, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  // constructor(private http: HttpClient) {}

  ngOnInit() {

    // this.http.get<any[]>(`http://localhost:8080/api/v1/stats`).subscribe(data=> {
    //   this.barChartLabels = data.map(item=>item.country);
    //   this.barChartData =  [
    //     { data: data.map(item=>item.salary), label: 'Countries' }
    //   ];

    // });

    // public chartType: string = 'pie';

    // public chartDatasets: Array<any> = [
  
    //   { data: [300, 50, 100, 40, 120], label: 'My First dataset' }
  
    // ];
  
    // public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];
  
    // public chartColors: Array<any> = [
  
    //   {
  
    //     backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
  
    //     hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
  
    //     borderWidth: 2,
  
    //   }
  
    // ];
  
    // public chartOptions: any = {
  
    //   responsive: true
  
    // };
//     <div style="display: block">

// <canvas mdbChart

// [chartType]="chartType"

// [datasets]="chartDatasets"

// [labels]="chartLabels"

// [colors]="chartColors"

// [options]="chartOptions"

// [legend]="true"

// (chartHover)="chartHovered($event)"

// (chartClick)="chartClicked($event)">

// </canvas>

// </div>
}
}
