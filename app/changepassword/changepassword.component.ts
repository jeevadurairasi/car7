import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  changePassword: FormGroup;

  constructor(private fb: FormBuilder,private router: Router){
    this.changePassword=this.fb.group({
      currentPassword:['',[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/)]],
      newpassword:['',[Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/)]]
    });
  }

  get currentPassword() {
    return this.changePassword.get('currentPassword')?.value || '';
  }

  get password() {
    return this.changePassword.get('newpassword')?.value || '';
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

  onReset(){
     if (this.changePassword.invalid) {
      this.changePassword.markAllAsTouched();
      return;
    }

    else {
      alert('Password Updated');
      this.router.navigate(['/profile']);
    }
  }
}
