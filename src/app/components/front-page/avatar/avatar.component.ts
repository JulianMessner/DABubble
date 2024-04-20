import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent implements OnInit {

  userService = inject(UserService);
  router = inject(Router);
  
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

  ngOnInit(): void {
    if (!this.user) {
      this.router.navigate(['/front/register']);
    }
  }

  selectAvatar(avatarPath: string) {
    this.userService.setAvatar(avatarPath);
    this.selectedAvatar = avatarPath;
  }

  addUser() {
    const user = this.userService.getUser();

    if (user && !user.avatar) {
      user.avatar = this.defaultAvatar;
    }

    // add user to firestore
  }
}
