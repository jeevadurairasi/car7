import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-rentals',
  templateUrl: './previous-rentals.component.html',
  styleUrls: ['./previous-rentals.component.css']
})
export class PreviousRentalsComponent {
  previousRentals = [
    { carName: 'Car 1', rentalDate: '2025-05-01', returnDate: '2025-05-05' },
    { carName: 'Car 2', rentalDate: '2025-04-15', returnDate: '2025-04-20' }
  ];
}