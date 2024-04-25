import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | null = null;

  constructor() { }

  getUser(): User | null {
    return this.user;
  }

  setUser(user: User): void {
    this.user = user;
  }

  setAvatar(avatar: string): void {
    if (this.user) {
      this.user.avatar = avatar;
    }
  }

  deleteUser(): void {
    this.user = null;
  }

  getUserWithoutPassword(user: User) {
    const userWithoutPw = {
      name: user.name,
      email: user.email,
      avatar: user.avatar
    }
    return userWithoutPw;
  }
}
