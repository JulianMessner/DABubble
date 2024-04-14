import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import { MainChatComponent } from './main-chat/main-chat.component';
import { DirectMessageComponent } from './direct-message/direct-message.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarVerticalComponent, MainChatComponent, DirectMessageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
