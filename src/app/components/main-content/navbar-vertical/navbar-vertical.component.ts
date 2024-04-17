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

  ngOnInit(): void {}

  showChannel() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setNavbarVisible(false);
      this.visibilityService.setMainChatVisible(true);
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }

  showDirectMessage() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setNavbarVisible(false);
      this.visibilityService.setDirectMessageVisible(true);
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }

  showNewMessage() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setNewMessageVisible(true);
      this.visibilityService.setNavbarVisible(false);
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }

  channelsContentVisible: boolean = false;
  messagesContentVisible: boolean = false;
  animationClass: string = '';
  isHovering: boolean = false;

  toggleChannelsContent() {
    this.channelsContentVisible = !this.channelsContentVisible;
  }

  toggleMessagesContent() {
    this.messagesContentVisible = !this.messagesContentVisible;
  }

  toggleHover(hovering: boolean) {
    this.isHovering = hovering;
  }
}
