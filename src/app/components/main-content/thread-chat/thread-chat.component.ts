import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-thread-chat',
  standalone: true,
  imports: [],
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
