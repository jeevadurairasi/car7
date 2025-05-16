import { Injectable } from '@angular/core';

export interface RentalDetails {
  pricePerKm: number;
  discount: number;
  perDayCost: number;
}

export interface Car {
  name: string;
  image: string;
  model: string;
  type: string;
  rentalDetails: RentalDetails;
  details: string;
  gearType: string;
  isFrequentRenter: boolean;
  loyaltyPoints: number;
  extraDiscountRides: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor() { }

  private bookings: { [key: string]: Car } = {
    car: {
      name: 'Car 1',
      image: './assets/OIP.jfif',
      model: 'Model 1',
      type: 'basic',
      rentalDetails: { pricePerKm: 10, discount: 20, perDayCost: 500 },
      details: 'Economical and fuel-efficient',
      gearType: 'manual',
      isFrequentRenter: true,
      loyaltyPoints: 0,
      extraDiscountRides: 0
    },
    // Add more bookings as needed
  };

  getCars(): Car[] {
    return Object.values(this.bookings);
  }

  getCarByName(name: string | null): Car | undefined {
    return Object.values(this.bookings).find(car => car.name === name);
  }

  cancelBooking(bookingId: string): boolean {
    if (this.bookings[bookingId]) {
      delete this.bookings[bookingId];
      return true;
    }
    return false;
  }
}

