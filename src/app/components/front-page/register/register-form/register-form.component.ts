import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

  formBuilder = inject(FormBuilder);
  
  checkboxChecked = false;

  checkboxValidator: ValidatorFn = (control: AbstractControl) => {
    return control.value ? null : { required: true };
  }

  constructor(private router: Router) {}

  registerForm = this.formBuilder.group({
    name: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required,
    ]],
    password: ['', [
      Validators.required,
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

  saveUser() {
    if (this.registerForm.valid) {
      console.log("Form data: " + this.registerForm.value);
      this.router.navigate(['/avatar']);
    }
  }
}
