import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  forgetPassword: FormGroup;

  constructor(private fb: FormBuilder,private router: Router){
    this.forgetPassword=this.fb.group({
      email:['',[Validators.required, Validators.email]],
      newpassword:['',[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/)]],
      confirmpassword:['',Validators.required]
    });
  }

  get password() {
    return this.forgetPassword.get('newpassword')?.value || '';
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

  get confirmPassword() {
    return this.forgetPassword.get('confirmpassword')?.value || '';
  }

  get hasPasswordMismatch() {
    return this.forgetPassword.get('confirmpassword')?.touched && this.confirmPassword !== this.password;
  }

  onReset(){
     if (this.forgetPassword.invalid) {
      return;
    }

    if (!this.hasPasswordMismatch) {
      this.router.navigate(['/login']);
    }
  }
}
