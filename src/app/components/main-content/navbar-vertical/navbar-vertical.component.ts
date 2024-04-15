import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { debug } from 'console';

@Component({
  selector: 'app-navbar-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-vertical.component.html',
  styleUrl: './navbar-vertical.component.scss',
})
export class NavbarVerticalComponent implements OnInit {
  constructor(private visibilityService: VisibilityService) {}

  handleNavbarItemClick() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setNavbarVisible(false);
      this.visibilityService.setMainChatVisible(true);
      this.visibilityService.setLogoVisible(false); 
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }

  handleDirectMessageItemClick() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setNavbarVisible(false);
      this.visibilityService.setDirectMessageVisible(true);
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }

  ngOnInit(): void {
    
  }

  channelsContentVisible: boolean = false;
  messagesContentVisible: boolean = false;
  animationClass: string = '';
  isHovering: boolean = false;

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

  toggleHover(hovering: boolean) {
    this.isHovering = hovering;
  }
}
