import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

type LoginState = 'initial' | 'adding' | 'success' | 'error';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

  formBuilder = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  loginState: LoginState = 'initial';
  @Output() loginEvent = new EventEmitter<boolean>();

  loginForm = this.formBuilder.group({
    email: ['', [
      Validators.required,
    ]],
    password: ['', [
      Validators.required,
    ]]
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async login() {
    if (this.email?.value && this.password?.value) {
      this.loginState = 'adding';
      this.loginEvent.emit(true);

      try {
        await this.authService.login(this.email.value, this.password.value);
        this.loginState = 'success';
        this.loginEvent.emit(false);
        this.router.navigate(['/']);
      } catch (e) {
        this.loginState = 'error';
        this.loginEvent.emit(false);
      }
    }
  }
}
