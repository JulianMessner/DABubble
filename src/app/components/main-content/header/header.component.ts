import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(public visibilityService: VisibilityService) {}

  ngOnInit() {}

  handleWorkspaceLogoClick() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setMainChatVisible(false);
      this.visibilityService.setNavbarVisible(true);
      this.visibilityService.setLogoVisible(true);
      this.visibilityService.setWorkspaceContainerVisible(false);
      this.visibilityService.setDirectMessageVisible(false);
      this.visibilityService.setNewMessageVisible(false);
    }
  }

  handleNavbarItemClick() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }
}
