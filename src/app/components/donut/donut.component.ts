import { Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { ChartData } from 'chart.js';


@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnInit{

 ngOnInit(): void {
     
 }

  @Input() title: string = "Sin título";
  // @Input('labels') labels: string [] = [];
  // @Input('data') data: number [] = [];


  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6','#009FFE','#F02059'],
      }
    ]
  };

  // ngOnchanges(changes: SimpleChanges): void
  // {
  //   this.doughnutChartData = 
  //   {
  //     labels: this.labels,
  //     datasets: [{data: this.data}]
  //   }
  // }

}
