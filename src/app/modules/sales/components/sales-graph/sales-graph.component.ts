import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.scss'],
})
export class SalesGraphComponent implements OnInit {
  public options: ChartOptions = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
  };
  public data: ChartData = {
    datasets: [{ data: [60, 70, 40, 100], label: 'Ventas' }],
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
  };
  public type: ChartType = 'line';

  constructor() {}

  ngOnInit(): void {}
}
