import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thread-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thread-chat.component.html',
  styleUrls: ['./thread-chat.component.scss', './desktop-thread-chat.component.scss']
})
export class ThreadChatComponent {

  constructor(public visibilityService: VisibilityService) {}

  closeThreadChat() {
    this.visibilityService.setThreadChatVisible(false);
    this.visibilityService.setMainChatVisible(true);
  }
}
