import { Component, OnDestroy, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Venta } from 'src/app/models/Venta';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  host: {
    class: 'd-flex w-100',
  },
})
export class SalesComponent implements OnInit, OnDestroy {
  constructor(private _api: ApiService, private _signalr: SignalrService) {}
  private onDestroy$ = new Subject<any>();
  public ventas: Venta[] = [];

  ngOnInit(): void {
    this._api.Ventas.get()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((data) => {
        this.ventas = data;
      });
    this._signalr.hubConnection.start().then(() => {
      this._signalr.hubConnection.on('ventaCreated', (o) =>
        console.log('algo bien')
      );
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
