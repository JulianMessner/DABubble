import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-main-chat',
  standalone: true,
  imports: [],
  templateUrl: './main-chat.component.html',
  styleUrl: './main-chat.component.scss'
})
export class MainChatComponent {

  constructor(public visibilityService: VisibilityService) {}

  showThreadChat() {
    // Zeige die Thread-Chat-Komponente an
    this.visibilityService.setMainChatVisible(false);
    this.visibilityService.setThreadChatVisible(true);
  }
}
