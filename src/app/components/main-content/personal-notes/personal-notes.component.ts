import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-personal-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, PickerModule],
  templateUrl: './personal-notes.component.html',
  styleUrls: ['./personal-notes.component.scss', './desktop-personal-notes.component.scss']
})
export class PersonalNotesComponent {
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
