import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class VisibilityService {
  logoVisible: boolean = true;
  workspaceContainerVisible: boolean = false;
  navbarVisible: boolean = true;
  mainChatVisible: boolean = false;
  directMessageVisible: boolean = false;
  threadChatVisible: boolean = false;
  newMessageVisible: boolean = false;

  setNavbarVisible(visible: boolean) {
    this.navbarVisible = visible;
  }

  setMainChatVisible(visible: boolean) {
    this.mainChatVisible = visible;
  }

  setLogoVisible(visible: boolean) {
    this.logoVisible = visible;
  }

  setWorkspaceContainerVisible(visible: boolean) {
    this.workspaceContainerVisible = visible;
  }

  setDirectMessageVisible(visible: boolean) {
    this.directMessageVisible = visible;
  }

  setThreadChatVisible(visible: boolean) {
    this.threadChatVisible = visible;
  }

  setNewMessageVisible(visible: boolean){
    this.newMessageVisible = visible;
  }
}
