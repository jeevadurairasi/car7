import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['Palak Sharma', Validators.required],
      email: ['palak@example.com', Validators.required],
      phone: ['+91-678905432', Validators.required ],
      avatar: ['assets/profile.png'],
    });
  }
  changePassword(): void {
    this.router.navigate(['/changepassword']);// when integrated will be directed to reset password page
  }
  onSubmit() {
    if (this.profileForm.valid) {
      this.router.navigate(['/profile']);
    }
  }
}
