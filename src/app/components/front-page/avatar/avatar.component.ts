import { Component, OnInit, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.interface';

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
  authService = inject(AuthService);

  defaultAvatar = 'assets/images/default_avatar.svg';
  selectedAvatar = signal<string>('');

  user = this.userService.getUser();

  isAdding = false;
  userCreationSuccess = false;
  userCreationError = false;
  errorMessage = '';

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
    this.selectedAvatar.set(avatarPath);
  }

  async addUser() {
    this.isAdding = true;
    const user = this.getUserWithAvatar();

    try {
      await this.authService.createUser(user.email, user.password);
      // add loader
      await this.showSuccess();

      // const userWithoutPw = this.userService.getUserWithoutPassword(user);
      // this.firebaseService.addUser(userWithoutPw);

      this.isAdding = false;
      // this.router.navigate(['/front/login']);
    } catch (e) {
      const err = e as Error;
      await this.showError(err.message);
      this.isAdding = false;
    }
  }

  getUserWithAvatar(): User {
    const user = this.userService.getUser();

    if (user) {
      if (!user.avatar) {
        user.avatar = this.defaultAvatar;
      }
    }
    
    return user!;
  }

  async showSuccess() {
    this.userCreationSuccess = true;

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.userCreationSuccess = false;
        resolve();
      }, 3000);
    });
  }

  async showError(errorMessage: string) {
    this.errorMessage = errorMessage;
    this.userCreationError = true;

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.userCreationError = false;
        resolve();
      }, 3000);
    })
  }
}