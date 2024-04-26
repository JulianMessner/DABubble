import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-thread-chat',
  standalone: true,
  imports: [CommonModule, FormsModule, PickerModule],
  templateUrl: './thread-chat.component.html',
  styleUrls: ['./thread-chat.component.scss', './desktop-thread-chat.component.scss']
})
export class ThreadChatComponent {
  editedMessage: string = '';
  originalMessage: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  isEditing: boolean = false; 
  showEmojiPopup: boolean = false;

  constructor(public visibilityService: VisibilityService) {}

  closeThreadChat() {
    this.visibilityService.setThreadChatVisible(false);
    this.visibilityService.setMainChatVisible(true);
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

  toggleEmojiPicker() {
    this.showEmojiPopup = !this.showEmojiPopup;
  }
}
