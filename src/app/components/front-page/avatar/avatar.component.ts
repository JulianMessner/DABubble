import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { RouterLink } from '@angular/router';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {

  userService = inject(UserService);

  defaultAvatar = 'assets/images/default_avatar.svg';
  selectedAvatar = '';

  user = this.userService.getUser();

  avatars: string[] = [
    'assets/images/avatar1.svg', 
    'assets/images/avatar2.svg',
    'assets/images/avatar3.svg',
    'assets/images/avatar4.svg',
    'assets/images/avatar5.svg',
    'assets/images/avatar6.svg'
  ];

  selectAvatar(avatarPath: string) {
    this.userService.setAvatar(avatarPath);
    this.selectedAvatar = avatarPath;
  }

  addUser() {
    // this.userService.getUser() add with firestoreService 
  }
}
