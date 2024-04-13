import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisibilityService {
  logoVisible: boolean = true;
  workspaceContainerVisible: boolean = false;

  setLogoVisible(visible: boolean) {
    this.logoVisible = visible;
  }

  setWorkspaceContainerVisible(visible: boolean) {
    this.workspaceContainerVisible = visible;
  }
}
