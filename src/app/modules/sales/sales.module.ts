import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SalesGraphComponent } from './components/sales-graph/sales-graph.component';
import { AddSaleComponent } from './components/add-sale/add-sale.component';
import { SalesComponent } from './pages/sales/sales.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SalesGraphComponent, AddSaleComponent, SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
  ],
})
export class SalesModule {}
