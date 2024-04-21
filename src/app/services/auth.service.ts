import { Injectable, inject } from '@angular/core';
import { UserCredential, createUserWithEmailAndPassword, getAuth, signOut } from '@angular/fire/auth';
import { Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private firebaseAuth = inject(Auth);

  private auth = getAuth();

  constructor() { }

  async createUser(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async login() {
    
  }

  async logOut(): Promise<void> {
    return signOut(this.auth);
  }

}
