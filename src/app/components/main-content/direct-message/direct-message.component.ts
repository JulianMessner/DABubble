import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './direct-message.component.html',
  styleUrls: ['./direct-message.component.scss', './desktop-direct-message.component.scss']
})
export class DirectMessageComponent {
  editedMessage: string = '';
  originalMessage: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  isEditing: boolean = false; 

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
}
