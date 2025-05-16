import { Component, OnInit } from '@angular/core';
 
interface book {
  date: any;
  type: string;
  city: string;
  fare: number;
  vehicleImg: string;
  status: string;
}
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  check: string = 'Active';
  bookings: book[] = [
    {
      date: 'Sat, Mar 29, 01:09 PM',
      type: 'Alto',
      city: 'Lucknow',
      fare: 200,
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v1.png',
      status: 'Active'
    },
    {
      date: 'Wed, Mar 26, 06:48 PM',
      type: 'Prime SUV',
      city: 'Pune',
      fare: 342,
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v1.png',
      status: 'Active'
    },
    {
      date: 'Thu, Feb 06, 02:20 PM',
      type: 'Mini',
      city: 'Banglore',
      fare: 404,
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      status: 'Completed'
    },
    {
      date: 'Mon, Jan 06, 08:12 AM',
      type: 'Mini',
      city: 'Mumbai',
      fare: 225,
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      status: 'Completed'
    },
    {
      date: 'Sun, Dec 15, 07:54 PM',
      type: 'Mini',
      city: 'Hyderabad',
      fare: 0,
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      status: 'cancelled'
    },
    {
      date: 'Sun, Dec 15, 03:58 PM',
      type: 'Mini',
      city: 'Andhra Pradesh',
      fare: 0,
      vehicleImg: 'https://img.icons8.com/ios-filled/50/car--v2.png',
      status: 'cancelled'
    }
  ];
 
  constructor() {}
 
  ngOnInit(): void {
    // Here you can fetch real booking data later from backend/API
  }
 
  get filteredCars(): book[] {
    return this.bookings.filter(book =>
      this.check === 'all' || book.status === this.check
    );
  }
}