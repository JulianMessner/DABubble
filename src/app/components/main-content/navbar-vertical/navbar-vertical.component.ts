import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/header-logo-visibility.service';

@Component({
  selector: 'app-navbar-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-vertical.component.html',
  styleUrl: './navbar-vertical.component.scss',
})
export class NavbarVerticalComponent {
  constructor(private visibilityService: VisibilityService) {}

  handleNavbarItemClick() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }

  channelsContentVisible: boolean = false;
  messagesContentVisible: boolean = false;
  animationClass: string = '';

  toggleChannelsContent() {
    this.channelsContentVisible = !this.channelsContentVisible;
    this.animationClass = this.channelsContentVisible
      ? 'slide-in'
      : 'slide-out';
  }

  toggleMessagesContent() {
    this.messagesContentVisible = !this.messagesContentVisible;
    this.animationClass = this.channelsContentVisible
      ? 'slide-in'
      : 'slide-out';
  }
}
