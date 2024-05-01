import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MainChatComponent } from '../main-content/main-chat/main-chat.component';

@Component({
  selector: 'app-channel-description',
  standalone: true,
  imports: [CommonModule, MainChatComponent],
  templateUrl: './channel-description.component.html',
  styleUrls: ['./channel-description.component.scss', './desktop-channel-description.component.scss'],
})
export class ChannelDescriptionComponent {
  isHovered: boolean = false;
  nameEditMode: boolean = false;
  isNameEditHovered: boolean = false;
  descriptionEditMode: boolean = false;
  isDescriptionEditHovered: boolean = false;
  name: string = 'Entwicklerteam';
  description: string =
    'Dieser Channel ist für alles rund um #dfsdf vorgesehen. Hier kannst du zusammen mit deinem Team Meetings abhalten, Dokumente teilen und Entscheidungen treffen.';

  @ViewChild('nameText') nameTextElement!: ElementRef;
  @ViewChild('descriptionText') descriptionTextElement!: ElementRef;

  constructor(private mainChatComponent: MainChatComponent) {}

  toggleChannelDescription() {
    this.mainChatComponent.toggleChannelDescription();
  }

  changeImgSrc(isHovering: boolean) {
    this.isHovered = isHovering;
  }

  toggleNameEditMode() {
    this.nameEditMode = !this.nameEditMode;
    if (this.nameEditMode && this.nameTextElement) {
      this.nameTextElement.nativeElement.focus();
    } else if (!this.nameEditMode && this.nameTextElement) {
      this.name = this.nameTextElement.nativeElement.innerText;
    }
  }

  toggleDescriptionEditMode() {
    this.descriptionEditMode = !this.descriptionEditMode;
    if (this.descriptionEditMode && this.descriptionTextElement) {
      this.descriptionTextElement.nativeElement.focus();
    } else if (!this.descriptionEditMode && this.descriptionTextElement) {
      this.description = this.descriptionTextElement.nativeElement.innerText;
    }
  }

  onMouseEnterEdit() {
    this.isNameEditHovered = true;
  }

  onMouseLeaveEdit() {
    this.isNameEditHovered = false;
  }

  onMouseEnterDescriptionEdit() {
    this.isDescriptionEditHovered = true;
  }

  onMouseLeaveDescriptionEdit() {
    this.isDescriptionEditHovered = false;
  }
}
