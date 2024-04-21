import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-new-channel',
  standalone: true,
  imports: [],
  templateUrl: './new-channel.component.html',
  styleUrls: [
    './new-channel.component.scss',
    './desktop-new-channel.component.scss',
  ],
})
export class NewChannelComponent {
  constructor(public visibilityService: VisibilityService) {}

  closeNewChannel() {
    if (window.innerWidth <= 800) {
      this.visibilityService.setLogoVisible(true);
      this.visibilityService.setWorkspaceContainerVisible(false);
    }
    this.visibilityService.setNewChannelVisible(false);
    this.visibilityService.setNavbarVisible(true);
  }
}
