import { Component } from '@angular/core';
import { MsgService } from './msg.service';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      ::ng-deep nb-layout-column {
        justify-content: center;
        display: flex;
      }
      nb-chat {
        width: 500px;
      }
    `,
  ],
  animations: [fadeInOnEnterAnimation(), fadeOutOnLeaveAnimation()],
})
export class AppComponent {
  title = 'ChatBot';
  message = 'Hello World!!!';
  respond!: string;
  constructor(private messageService: MsgService) {}

  messages: any[] = [];

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: 'You',
        avatar: 'https://i.gifer.com/J2zA.gif',
      },
    });

    this.messageService.postMessage(event.message).subscribe((x) => {
      return this.messages.push({
        text: x.choices[0].message.content,
        date: new Date(),
        reply: false,
        user: {
          name: 'ChatGPT (I think)',
          avatar: 'https://i.gifer.com/E9by.gif',
        },
      });
    });
  }
}
