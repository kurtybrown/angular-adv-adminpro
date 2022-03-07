import { Component } from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component{

  public labels1: string[] = [ 'Proteínas', 'Vitaminas', 'Antioxidantes' ];

  public data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 11, 23, 42 ]}
    ]};
}
