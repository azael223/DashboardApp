import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { Venta } from 'src/app/models/Venta';
import * as moment from 'moment';
@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.scss'],
})
export class SalesGraphComponent implements OnInit {
  @Input('ventas') set ventas(ventas: Venta[]) {
    this.data = {
      datasets: [
        {
          data: ventas
            .filter((venta) => venta.venta)
            .map(({ venta }) => venta.importe),
          label: 'Ventas',
        },
      ],
      labels: ventas
        .filter((venta) => venta.venta)
        .map(({ _ts }) => moment(_ts).format('L')),
    };
  }
  public options: ChartOptions = {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
  };
  public data: ChartData = {
    datasets: [{ data: [60, 70, 40, 100], label: 'Ventas' }],
  };
  public type: ChartType = 'line';

  constructor() {}

  ngOnInit(): void {}
}
