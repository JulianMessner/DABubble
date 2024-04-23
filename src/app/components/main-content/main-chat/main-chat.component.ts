import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main-chat.component.html',
  styleUrls: [
    './main-chat.component.scss',
    './desktop-main-chat.component.scss',
  ],
})
export class MainChatComponent {
  editedMessage: string = '';
  originalMessage: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  isEditing: boolean = false; 

  constructor(public visibilityService: VisibilityService) {}

  showThreadChat() {
    if (window.innerWidth <= 1150) {
      this.visibilityService.setMainChatVisible(false);
    }
    this.visibilityService.setThreadChatVisible(true);
  }

  enableEdit() {
    this.editedMessage = this.originalMessage;
    this.isEditing = true;
    this.visibilityService.hideEditMessageText();
  }

  cancelEdit() {
    this.isEditing = false;
  }

  saveEdit() {
    this.originalMessage = this.editedMessage;
    this.isEditing = false;
  }
}
