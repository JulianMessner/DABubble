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
  styleUrls: [
    './personal-notes.component.scss',
    './desktop-personal-notes.component.scss',
  ],
})
export class PersonalNotesComponent {
  editedMessage: string = '';
  originalMessage: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
  isEditing: boolean = false;
  selectedMessage: HTMLElement | null = null;
  selectedInput: HTMLInputElement | null = null;
  selectedTextarea: HTMLTextAreaElement | null = null;
  showEmojiPopup: boolean = false;
  showEmojiPopupInput: boolean = false;
  showEmojiPopupTextarea: boolean = false;
  emojiClickCounts: Map<string, number> = new Map();

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

  openEmojiPicker(event: MouseEvent, messageElement: HTMLElement) {
    this.showEmojiPopup = !this.showEmojiPopup;
    this.selectedMessage = messageElement;
  }

  openEmojiPickerInput(event: MouseEvent, input: HTMLInputElement) {
    this.showEmojiPopupInput = !this.showEmojiPopupInput;
    this.selectedInput = input;
  }

  openEmojiPickerTextarea(event: MouseEvent, textarea: HTMLTextAreaElement) {
    this.showEmojiPopupTextarea = !this.showEmojiPopupTextarea;
    this.selectedTextarea = textarea;
  }

  addEmojiToInput(emoji: string) {
    if (this.selectedInput) {
      const cursorPosition = this.selectedInput.selectionStart || 0;
      const inputValue = this.selectedInput.value;
      const newValue =
        inputValue.slice(0, cursorPosition) +
        emoji +
        inputValue.slice(cursorPosition);
      this.selectedInput.value = newValue;
      this.selectedInput.setSelectionRange(
        cursorPosition + emoji.length,
        cursorPosition + emoji.length
      );
    }
    this.showEmojiPopupInput = false;
  }

  addEmojiToMessage(emoji: string) {
    if (this.selectedMessage) {
      if (this.emojiClickCounts.has(emoji)) {
        const count = this.emojiClickCounts.get(emoji) || 0;
        this.emojiClickCounts.set(emoji, count + 1);
        const emojiCountSpan = this.selectedMessage.querySelector(
          `.${emoji}-count`
        );
        if (emojiCountSpan) {
          emojiCountSpan.textContent = `${count + 1}`;
        } else {
          this.selectedMessage.innerHTML += `<div class="emoji-received"><span${emoji}</span><span class="${emoji}-count">2</span></div>`;
        }
      } else {
        this.emojiClickCounts.set(emoji, 1);
        this.selectedMessage.innerHTML += `<div class="emoji-received"><span>${emoji}</span><span class="${emoji}-count">1</span></div>`;
      }
    }
    this.showEmojiPopup = !this.showEmojiPopup;
  }

  addEmojiToTextarea(emoji: string) {
    if (this.selectedTextarea && this.isEditing) {
      const cursorPosition = this.selectedTextarea.selectionStart || 0;
      const inputValue = this.selectedTextarea.value;
      const newValue =
        inputValue.slice(0, cursorPosition) +
        emoji +
        inputValue.slice(cursorPosition);
      this.selectedTextarea.value = newValue;
      this.editedMessage = newValue;
      this.selectedTextarea.setSelectionRange(
        cursorPosition + emoji.length,
        cursorPosition + emoji.length
      );
    }
    this.showEmojiPopupTextarea = !this.showEmojiPopupTextarea;
  }
}
