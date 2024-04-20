import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { DirectMessageComponent } from './direct-message/direct-message.component';
import { ThreadChatComponent } from './thread-chat/thread-chat.component';
import { VisibilityService } from '../../service/visibility.service';
import { CommonModule } from '@angular/common';
import { NewMessageComponent } from './new-message/new-message.component';
import { NewChannelComponent } from './new-channel/new-channel.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NavbarVerticalComponent, MainChatComponent, DirectMessageComponent, ThreadChatComponent, NewMessageComponent, NewChannelComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent implements OnInit {

  screenWidth: number = window.innerWidth;

  constructor(public visibilityService: VisibilityService) {}
  
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth;
    });
  }

  isScreenMobile(): boolean {
    return this.screenWidth <= 800;
  }

  isScreenDesktop(): boolean {
    return this.screenWidth >= 801;
  }
}
