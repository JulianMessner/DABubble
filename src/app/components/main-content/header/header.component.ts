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
    if (window.innerWidth <= 800) {
      // Wenn die Bildschirmbreite kleiner oder gleich 800px ist,
      // wird das Logo sichtbar gemacht und der workspace-container ausgeblendet
      this.visibilityService.setLogoVisible(true);
      this.visibilityService.setWorkspaceContainerVisible(false);
    }
  }

  handleNavbarItemClick() {
    if (window.innerWidth <= 800) {
      // Wenn die Bildschirmbreite kleiner oder gleich 800px ist,
      // wird das Logo ausgeblendet und der workspace-container sichtbar gemacht
      this.visibilityService.setLogoVisible(false);
      this.visibilityService.setWorkspaceContainerVisible(true);
    }
  }
}
