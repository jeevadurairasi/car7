import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  captcha: string = this.generateCaptcha();

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],  // Removed Gmail restriction
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/)
      ]],
      confirmPassword: ['', Validators.required],
      captchaInput: ['', Validators.required]
    });
  }

  // Helper methods to validate the password
  get password() {
    return this.signupForm.get('password')?.value || '';
  }

  get hasMinLength() {
    return this.password.length >= 8 && this.password.length <= 12;
  }

  get hasUppercase() {
    return /[A-Z]/.test(this.password);
  }

  get hasAlphanumeric() {
    return /[a-zA-Z]/.test(this.password) && /\d/.test(this.password);
  }

  get hasSpecialChar() {
    return /[!@#$%^&*]/.test(this.password);
  }

  // Confirm password validation
  get confirmPassword() {
    return this.signupForm.get('confirmPassword')?.value || '';
  }

  // Captcha validation
  get captchaInput() {
    return this.signupForm.get('captchaInput')?.value || '';
  }

  get hasPasswordMismatch() {
    return this.signupForm.get('confirmPassword')?.touched && this.confirmPassword !== this.password;
  }

  get hasCaptchaMismatch() {
    return this.signupForm.get('captchaInput')?.touched && this.captchaInput !== this.captcha;
  }

  generateCaptcha(): string {
    return Math.random().toString(36).substring(2, 8);
  }

  refreshCaptcha(): void {
    this.captcha = this.generateCaptcha();
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      return;
    }

    if (!this.hasPasswordMismatch && !this.hasCaptchaMismatch) {
      const userData = this.signupForm.value;

      // Now the subscribe method should work because register returns an Observable
      this.authService.register(userData).subscribe(
        (response: any) => {  // Handle the response correctly
          console.log('Registration successful', response);
          this.router.navigate(['/login']);
        },
        (error: any) => {  // Handle errors correctly
          console.error('Registration failed', error);
          if (error.error && error.error.message) {
            alert(`Error: ${error.error.message}`);
          } else {
            alert('An unexpected error occurred. Please try again.');
          }
        }
      );
    }
  }
}
