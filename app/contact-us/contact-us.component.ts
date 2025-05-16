import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]], // Name must be at least 3 characters
      email: ['', [Validators.required, Validators.email]], // Valid email required
      message: ['', [Validators.required, Validators.minLength(10)]] // Message must be at least 10 characters
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      let errorMessage = '';

      if (this.contactForm.controls['name'].hasError('required')) {
        errorMessage += '❌ Name is required.\n';
      }
      if (this.contactForm.controls['name'].hasError('minlength')) {
        errorMessage += '❌ Name must be at least 5 characters.\n';
      }

      if (this.contactForm.controls['email'].hasError('required')) {
        errorMessage += '❌ Email is required.\n';
      }
      if (this.contactForm.controls['email'].hasError('email')) {
        errorMessage += '❌ Invalid email format.\n';
      }

      if (this.contactForm.controls['message'].hasError('required')) {
        errorMessage += '❌ Message is required.\n';
      }
      if (this.contactForm.controls['message'].hasError('minlength')) {
        errorMessage += '❌ Message must be at least 10 characters.\n';
      }

      alert(errorMessage); // Shows detailed errors in alert popup
      return;
    }

    alert('✅ Message sent successfully!');
    this.contactForm.reset();
  }
}