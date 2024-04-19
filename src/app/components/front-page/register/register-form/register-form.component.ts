import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.interface';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  formBuilder = inject(FormBuilder);
  userService = inject(UserService);
  
  checkboxChecked = false;

  checkboxValidator: ValidatorFn = (control: AbstractControl) => {
    return control.value ? null : { required: true };
  }

  constructor(private router: Router) {}

  isNameActive = false;
  isEmailActive = false;
  isPasswordActive = false;

  registerForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.pattern(/^[A-Za-zäöüßéèêëçñàâ]+ [A-Za-zäöüßéèêëçñàâ]+$/)
    ]],
    email: ['', [
      Validators.required,
      Validators.pattern(/[^@]+@[^\.]+\..+/)
    ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
    ]],
    checkbox: ['', [
      this.checkboxValidator
    ]]
  })

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get checkbox() {
    return this.registerForm.get('checkbox');
  }

  saveUser(): void {
    if (this.registerForm.valid) {
      const registerFormObj = this.registerForm.value;

      const user: User = {
        name: registerFormObj.name!,
        email: registerFormObj.email!,
        password: registerFormObj.password!
      }
      this.userService.setUser(user)
      this.router.navigate(['/avatar']);
    }
  }
}
