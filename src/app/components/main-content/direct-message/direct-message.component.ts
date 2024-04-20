import { Component } from '@angular/core';
import { VisibilityService } from '../../../service/visibility.service';

@Component({
  selector: 'app-direct-message',
  standalone: true,
  imports: [],
  templateUrl: './direct-message.component.html',
  styleUrls: ['./direct-message.component.scss', './desktop-direct-message.component.scss']
})
export class DirectMessageComponent {
  constructor(private visibilityService: VisibilityService) {}
}
