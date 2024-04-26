import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [CommonModule, FormsModule, PickerModule],
  templateUrl: './direct-message.component.html',
  styleUrls: ['./direct-message.component.scss', './desktop-direct-message.component.scss']
})
export class DirectMessageComponent {
  editedMessage: string = '';
  originalMessage: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  isEditing: boolean = false; 
  showEmojiPopup: boolean = false;

  constructor(public visibilityService: VisibilityService) {}

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
