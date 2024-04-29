import { Component, ElementRef, OnInit, ViewChild, inject, signal } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.interface';
import { StorageService } from '../../../services/storage.service';

type UserCreation = 'initial' | 'adding' | 'success' | 'error';

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
  storageService = inject(StorageService);

  defaultAvatar = 'assets/images/default_avatar.svg';
  selectedAvatar = signal<string>('');

  user = this.userService.getUser();

  userCreationState: UserCreation = 'initial';
  userCreationSuccess = false;
  userCreationError = false;
  errorMessage = '';

  imageUploadStatus: 'initial' | 'error' = 'initial';
  file: File | null = null;
  selectedImageUrl!: string;
  @ViewChild('inputFile') inputFile!: ElementRef;

  avatars: string[] = [
    'assets/images/avatar1.svg',
    'assets/images/avatar2.svg',
    'assets/images/avatar3.svg',
    'assets/images/avatar4.svg',
    'assets/images/avatar5.svg',
    'assets/images/avatar6.svg'
  ];

  ngOnInit(): void {
    // if (!this.user) {
    //   this.router.navigate(['/front/register']);
    // }
  }

  selectAvatar(avatarPath: string) {
    if (this.file) {
      this.inputFile.nativeElement.value = '';
    }
    this.userService.setAvatar(avatarPath);
    this.selectedAvatar.set(avatarPath);
  }

  async addUser() {
    this.userCreationState = 'adding';
    const user = await this.getUserWithAvatar();

    try {
      await this.authService.createUser(user.email, user.password);
      await this.showSuccess();

      // const userWithoutPw = this.userService.getUserWithoutPassword(user);
      // this.firebaseService.addUser(userWithoutPw);

      this.router.navigate(['/front/login']);
    } catch (e) {
      const err = e as Error;
      this.showError(err.message);
    }
  }

  async getUserWithAvatar(): Promise<User> {
    const user = this.userService.getUser();

    if (user) {
      if (this.file && this.inputFile.nativeElement.value) {
        const storageImageUrl = await this.uploadImage();
        if (storageImageUrl) {
          user.avatar = storageImageUrl;
        }
      } else if (!user.avatar) {
        user.avatar = this.defaultAvatar;
      }
    }

    return user!;
  }

  async showSuccess() {
    this.userCreationState = 'success';

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        this.userCreationState = 'initial';
        resolve();
      }, 3000);
    });
  }

  showError(errorMessage: string) {
    if (errorMessage.includes('Firebase')) {
      let words = errorMessage.split(' ');
      words = words.slice(1);
      const errorMessageClean = words.join(' ');

      this.errorMessage = errorMessageClean;
    } else {
      this.errorMessage = errorMessage;
    }

    this.userCreationState = 'error';
  }

  async selectImage(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (files) {
      this.file = files[0];

      this.selectedImageUrl = URL.createObjectURL(this.file);
      this.selectedAvatar.set(this.selectedImageUrl);
    }
  }

  async uploadImage(): Promise<string | undefined> {
    if (!this.file) return;

    try {
      const uploadResult = await this.storageService.uploadImage(this.file);
      const storageImageUrl = await this.storageService.getFSImageURL(uploadResult.metadata.name);
      return storageImageUrl;
    } catch(e) {
      this.imageUploadStatus = 'error';
      return undefined;
    }
  }
}