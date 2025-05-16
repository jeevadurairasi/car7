import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  captcha: string = this.generateCaptcha();

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      captchaInput: ['', Validators.required]
    });
  }

  generateCaptcha(): string {
    return Math.random().toString(36).substring(2, 8);
  }

  refreshCaptcha(): void {
    this.captcha = this.generateCaptcha();
  }

  onLogin() {
    const captchaInput = this.loginForm.get('captchaInput')?.value;
    if (this.loginForm.invalid) {
      alert('Please fill in all required fields correctly.');
      return;
    } else if (captchaInput !== this.captcha) {
      alert('Captcha is incorrect. Please try again.');
      this.captcha = this.generateCaptcha();
      return;
    }
    if (this.loginForm.valid) {
      this.authService.login();
      this.router.navigate(['/home']);
    }
  }

}
