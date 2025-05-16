import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    isSignedIn = false;  // Assume user is not signed in
    
    constructor(private router: Router){}
    bookCar() {
        if (!this.isSignedIn) {
            alert("Please sign in first to book a car.");
        } else {
            this.router.navigate(['/vehicletypes']);
        }
    }
}
