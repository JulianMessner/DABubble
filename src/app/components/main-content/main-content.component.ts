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
  styleUrls: ['./main-content.component.scss', './desktop-main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  screenWidth: number = window.innerWidth;
  menuText: string = 'Workspace-Menü schließen';
  menuImage: string = '../../../assets/img/toggle-menu.svg';
  isMenuOpen: boolean = true;

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

  toggleMenu() {
    if (this.isMenuOpen) {
      this.menuText = 'Workspace-Menü öffnen';
      this.menuImage = '../../../assets/img/toggle-menu-show.svg';
    } else {
      this.menuText = 'Workspace-Menü schließen';
      this.menuImage = '../../../assets/img/toggle-menu.svg';
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  isNavbarVisible(): boolean {
    return this.isMenuOpen;
  }
}
