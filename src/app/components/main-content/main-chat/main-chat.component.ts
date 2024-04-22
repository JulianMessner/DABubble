import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-chat.component.html',
  styleUrls: [
    './main-chat.component.scss',
    './desktop-main-chat.component.scss',
  ],
})
export class MainChatComponent {
  constructor(public visibilityService: VisibilityService) {}

  showThreadChat() {
    if (window.innerWidth <= 1150) {
      this.visibilityService.setMainChatVisible(false);
    }
    this.visibilityService.setThreadChatVisible(true);
  }
}
