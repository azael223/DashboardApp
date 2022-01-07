import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChatAdapter } from 'ng-chat';
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
  constructor(private http: HttpClient) { }

  title = 'app';
  currentTheme:any = 'light-theme';
  triggeredEvents = [];
  fileUploadUrl: string = `${SignalRAdapter.serverBaseUrl}UploadFile`;

  userId: string = "offline-demo";
  username!: string;

  adapter: ChatAdapter = new DemoAdapter();
  signalRAdapter!: SignalRGroupAdapter;

  switchTheme(theme: string): void {
    this.currentTheme = theme;
  }

  onEventTriggered(event: string): void {
    this.triggeredEvents.push(<never>event);
  }

  joinSignalRChatRoom(): void {
    const userName = prompt('Please enter a user name:');

    this.signalRAdapter = new SignalRGroupAdapter(<any>userName, this.http);
  }
}
