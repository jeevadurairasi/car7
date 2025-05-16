import { Component } from '@angular/core';

@Component({
  selector: 'app-further-rentals',
  templateUrl: './further-rentals.component.html',
  styleUrls: ['./further-rentals.component.css']
})
export class FurtherRentalsComponent {
  furtherRentals = [
    { carName: 'Car 4', rentalDate: '2025-06-01', returnDate: '2025-06-05' },
    { carName: 'Car 5', rentalDate: '2025-07-10', returnDate: '2025-07-15' }
  ];
}