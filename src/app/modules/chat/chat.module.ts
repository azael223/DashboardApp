import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { NgChatModule } from 'ng-chat'

@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    NgChatModule
  ],
  exports:[ChatComponent]
})
export class ChatModule { }
