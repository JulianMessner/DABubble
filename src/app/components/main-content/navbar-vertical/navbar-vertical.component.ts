import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-navbar-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss', './desktop-navbar-vertical.component.scss'],
})

export class NavbarVerticalComponent implements OnInit {
  channelsContentVisible: boolean = false;
  messagesContentVisible: boolean = false;
  animationClass: string = '';
  isHovering: boolean = false;
  currentImage: string = '../../../../assets/img/new-message.svg';
  isClicked: boolean = false;
  isTagIconHovered: boolean = false;
  channelsListSelected: boolean = false;
  userListSelected: boolean = false;
  personalNotesSelected: boolean = false;


  constructor(private visibilityService: VisibilityService) {}

  ngOnInit(): void {
  }

  showChannel() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
    this.visibilityService.setNavbarVisible(true);
    this.visibilityService.setMainChatVisible(true);
    this.visibilityService.setDirectMessageVisible(false);
    this.visibilityService.setNewMessageVisible(false);
    this.visibilityService.setPersonalNotesVisible(false);
    this.channelsListSelected = true;
    this.userListSelected = false;
  }

  showDirectMessage() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
    this.visibilityService.setNavbarVisible(true);
    this.visibilityService.setDirectMessageVisible(true);
    this.visibilityService.setMainChatVisible(false);
    this.visibilityService.setThreadChatVisible(false);
    this.visibilityService.setNewMessageVisible(false);
    this.visibilityService.setPersonalNotesVisible(false);
    this.userListSelected = true;
    this.personalNotesSelected = false;
    this.channelsListSelected = false;
  }

  showNewMessage() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
    this.visibilityService.setNavbarVisible(true);
    this.visibilityService.setNewMessageVisible(true);
    this.visibilityService.setMainChatVisible(false);
    this.visibilityService.setThreadChatVisible(false);
    this.visibilityService.setDirectMessageVisible(false);
    this.visibilityService.setPersonalNotesVisible(false);
  }

  showNewChannel(){
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
      this.visibilityService.setMainChatVisible(false);
      this.visibilityService.setThreadChatVisible(false);
      this.visibilityService.setDirectMessageVisible(false);
      this.visibilityService.setNewMessageVisible(false);
      this.visibilityService.setPersonalNotesVisible(false);
    }
    this.visibilityService.setNavbarVisible(true);
    this.visibilityService.setNewChannelVisible(true);
  }

  showPersonalNotes(){
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
    this.visibilityService.setNavbarVisible(true);
    this.visibilityService.setDirectMessageVisible(false);
    this.visibilityService.setMainChatVisible(false);
    this.visibilityService.setThreadChatVisible(false);
    this.visibilityService.setNewMessageVisible(false);
    this.visibilityService.setPersonalNotesVisible(true);
    this.personalNotesSelected = true;
    this.userListSelected = false;
    this.channelsListSelected = false;
  }

  toggleChannelsContent() {
    this.channelsContentVisible = !this.channelsContentVisible;
  }

  toggleMessagesContent() {
    this.messagesContentVisible = !this.messagesContentVisible;
  }

  toggleHover(hovering: boolean) {
    this.isHovering = hovering;
  }

  changeHoveredImage(isHovered: boolean) {
    if (isHovered) {
      this.currentImage = '../../../../assets/img/new-message-hover.svg';
    } else {
      this.currentImage = '../../../../assets/img/new-message.svg';
    }
  }

  changeClickedImage(isClicked: boolean) {
    if (isClicked) {
      this.currentImage = '../../../../assets/img/new-message-clicked.svg';
    } else {
      this.currentImage = '../../../../assets/img/new-message-hover.svg';
    }
  }

  changeTagIconSrc(isHovered: boolean) {
    this.isTagIconHovered = isHovered;
  }
}
