import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { DemoAdapter } from './demo-adapter';
import { SignalRAdapter } from './signalr-adapter';
import { SignalRGroupAdapter } from './signalr-group-adapter';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private _api: ApiService, private _signalR: SignalrService) {}

  title = 'app';
  currentTheme: any = 'light-theme';
  triggeredEvents = [];
  fileUploadUrl: string = `${SignalRAdapter.serverBaseUrl}UploadFile`;

  userId: string = new Date().getTime.toString();
  username!: string;

  adapter: ChatAdapter = new SignalRAdapter(
    this.userId,
    this._api,
    this._signalR
  );

  switchTheme(theme: string): void {
    this.currentTheme = theme;
  }

  onEventTriggered(event: string): void {
    this.triggeredEvents.push(<never>event);
  }
}
