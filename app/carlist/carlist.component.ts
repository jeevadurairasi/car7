import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
interface RentalDetails {
  pricePerKm: number;
  discount: number;
  perDayCost: number; // Add per day rental cost
}

interface Car {
  name: string;
  image: string;
  model: string;
  type: 'economy' | 'premier' | 'luxury';
  rentalDetails: RentalDetails;
  userDistance?: number;
  rentalDays?: number;
  details: string;
  gearType: 'manual' | 'automatic';
  isFrequentRenter?: boolean;
  loyaltyPoints?: number;
  extraDiscountRides?: number;
}
@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css']
})
export class CarlistComponent {

  selectedType: string = 'all';
    selectedGearType: string = 'all';
    selectedCity: string = 'all';
    city: string = 'All';
    carname:string='';
    car1:string='';
  
    constructor(private sharedService: SharedService) {}
  
    ngOnInit(): void {
      const { city, carname,car1 } = this.sharedService.getCityAndCar();
    this.city = city;
    this.carname = carname;
    this.car1=car1;
    }
  
    ctype='luxury';
 
    cars: Car[] = [
        { name: 'Car 1', image: './assets/suv6.jfif', model: 'Model 1', type: 'economy', rentalDetails: { pricePerKm: 10, discount: 20, perDayCost: 500 }, details: 'Economical and fuel-efficient', gearType: 'manual', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 2', image: './assets/suv1.jfif', model: 'Model 2', type: 'premier', rentalDetails: { pricePerKm: 12, discount: 25, perDayCost: 700 }, details: 'Comfortable and spacious', gearType: 'automatic', isFrequentRenter: false, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 3', image: './assets/suv2.jfif', model: 'Model 3', type: 'luxury', rentalDetails: { pricePerKm: 15, discount: 30, perDayCost: 1000 }, details: 'Luxury and high performance', gearType: 'automatic', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 4', image: './assets/suv3.jfif', model: 'Model 4', type: 'economy', rentalDetails: { pricePerKm: 10, discount: 20, perDayCost: 500 }, details: 'Economical and fuel-efficient', gearType: 'automatic', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 5', image: './assets/suv4.jfif', model: 'Model 1', type: 'premier', rentalDetails: { pricePerKm: 10, discount: 20, perDayCost: 500 }, details: 'Comfortable and spacious', gearType: 'manual', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 },
        { name: 'Car 6', image: './assets/suv5.jfif', model: 'Model 3', type: 'luxury', rentalDetails: { pricePerKm: 10, discount: 20, perDayCost: 500 }, details: 'Luxury and high performance', gearType: 'manual', isFrequentRenter: true, loyaltyPoints: 0, extraDiscountRides: 0 }
      ];
 
    get filteredCars(): Car[] {
      return this.cars.filter(car =>
        (car.type === this.ctype) &&
        (this.selectedGearType === 'all' || car.gearType === this.selectedGearType)
      );
    }
  
    calculateRentalCost(car: Car): number {
      const { pricePerKm, discount, perDayCost } = car.rentalDetails;
      const userDistance = car.userDistance || 0;
      const rentalDays = car.rentalDays || 1; // Default to 1 day if not provided
  
      // Calculate base cost
      const baseCost = pricePerKm * userDistance;
  
      // Determine tax rate based on car type
      let taxRate = 0;
      switch (car.type) {
        case 'economy':
          taxRate = 0.10;
          break;
        case 'premier':
          taxRate = 0.20;
          break;
        case 'luxury':
          taxRate = 0.40;
          break;
      }
  
      // Calculate total cost with tax
      const tax = baseCost * taxRate;
      let totalCost = baseCost + tax;
  
      // Apply initial discount
      totalCost -= (totalCost * discount) / 100;
  
      // Apply additional discount for frequent renters and distance > 1000 km
      if (userDistance > 1000 && car.isFrequentRenter) {
        totalCost -= (totalCost * 10) / 100;
      }
  
      // Apply extra discount for loyalty points
      if (car.extraDiscountRides && car.extraDiscountRides > 0) {
        totalCost -= (totalCost * 10) / 100; // Assuming a 10% extra discount
        car.extraDiscountRides--; // Decrease the count of extra discount rides
      }
  
      // Add per day rental cost if rented for more than a day
      if (rentalDays > 1) {
        totalCost += perDayCost * (rentalDays - 1);
      }
  
      // Ensure total cost is not negative
      totalCost = Math.max(totalCost, 0);
  
      return totalCost;
    }
  
    calculateLoyaltyPoints(car: Car): number {
      const userDistance = car.userDistance || 0;
      const points = Math.floor(userDistance / 50);
      car.loyaltyPoints = (car.loyaltyPoints ||0)  + points;
  
      // Check if loyalty points qualify for extra discount rides
      if (car.loyaltyPoints >= 25) {
        car.extraDiscountRides = 2; // Give 2 consecutive rides extra discount
        car.loyaltyPoints -= 25; // Deduct the used points
      }
  
      return car.loyaltyPoints;
    }
  
    bookCar(car: Car): void {
      // Increase loyalty points when booking is confirmed
      car.loyaltyPoints = (car.loyaltyPoints || 0) ; // Example: Add 10 points for each booking
      alert(`Car ${car.name} has been booked successfully! Loyalty points: ${car.loyaltyPoints} also extra ride ${car.extraDiscountRides}`);
    }
}