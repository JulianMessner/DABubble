import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './direct-message.component.html',
  styleUrls: ['./direct-message.component.scss', './desktop-direct-message.component.scss']
})
export class DirectMessageComponent {
  constructor(public visibilityService: VisibilityService) {}
}
