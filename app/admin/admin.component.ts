import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  constructor( private router: Router) {}

  // ngOnInit() {
  //   // Check if the admin is authenticated
  //     this.router.navigate(['/login']); // Redirect to login if not authenticated
  // }

  // Navigate to different sections
  deleteCars() {
    this.router.navigate(['/admin/manage-cars']);
  }

  updateCars(){

  }

  viewRentals() {
    this.router.navigate(['/admin/rentals']);
  }

  userHistory() {
    this.router.navigate(['/admin/user-history']);
  }
}
