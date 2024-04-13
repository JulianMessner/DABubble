import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisibilityService } from '../../../service/header-logo-visibility.service';

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
    this.visibilityService.setLogoVisible(true);
    this.visibilityService.setWorkspaceContainerVisible(false);
  }

  handleNavbarItemClick() {
    this.visibilityService.setLogoVisible(false);
    this.visibilityService.setWorkspaceContainerVisible(true);
  }
}
