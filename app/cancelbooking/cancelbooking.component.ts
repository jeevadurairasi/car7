import { Component } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';

interface Ride {
  id: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent {

  bookingId: string = '';
  message: string = '';
  activeRides: Ride[] = [
    { id: 'Ride 1', date: '2025-05-12', time: '10:00 AM' },
    { id: 'Ride 2', date: '2025-05-13', time: '02:00 PM' },
    { id: 'Ride 3', date: '2025-05-14', time: '06:00 PM' }
  ]; // Example active rides with date and time
  cancelledRides: string[] = []; // Initialize cancelled rides

  constructor(private carService: CarServiceService) {}

  cancelBooking(): void {
    const success = this.carService.cancelBooking(this.bookingId);
    if (success) {
      this.message = 'Booking canceled successfully.';
      this.moveRideToCancelled(this.bookingId);
    } else {
      this.message = 'Failed to cancel booking. Please check the booking ID and try again.';
    }
  }

  moveRideToCancelled(bookingId: string): void {
    const index = this.activeRides.findIndex(ride => ride.id === bookingId);
    if (index > -1) {
      const cancelledRide = this.activeRides.splice(index, 1)[0]; // Remove from active rides
      this.cancelledRides.push(cancelledRide.id); // Add to cancelled rides
    }
  }
}