import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  constructor() {}

  public hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(`${environment.apiUri}api/`)
    .build();
}
