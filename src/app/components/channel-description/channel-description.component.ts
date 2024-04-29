import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainChatComponent } from '../main-content/main-chat/main-chat.component';

@Component({
  selector: 'app-channel-description',
  standalone: true,
  imports: [CommonModule, MainChatComponent],
  templateUrl: './channel-description.component.html',
  styleUrl: './channel-description.component.scss',
})
export class ChannelDescriptionComponent {
  isHovered: boolean = false;

  constructor(private mainChatComponent: MainChatComponent) {}

  toggleChannelDescription() {
    this.mainChatComponent.toggleChannelDescription();
  }

  changeImgSrc(isHovering: boolean) {
    this.isHovered = isHovering;
  }
}
