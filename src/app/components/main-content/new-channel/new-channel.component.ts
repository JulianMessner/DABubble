import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-new-channel',
  standalone: true,
  imports: [],
  templateUrl: './new-channel.component.html',
  styleUrl: './new-channel.component.scss',
})
export class NewChannelComponent {
  constructor(public visibilityService: VisibilityService) {}

  closeNewChannel() {
    this.visibilityService.setNewChannelVisible(false);
    this.visibilityService.setNavbarVisible(true);
    this.visibilityService.setLogoVisible(true);
    this.visibilityService.setWorkspaceContainerVisible(false);
  }
}
