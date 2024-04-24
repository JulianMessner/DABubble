import { Injectable, inject } from '@angular/core';
import { UserCredential, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
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

  async login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logOut(): Promise<void> {
    return signOut(this.auth);
  }

}
