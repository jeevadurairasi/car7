import { Injectable } from "@angular/core";
import { Car, Rental } from "../adminmodels";
import { CarService } from "./car.service";

@Injectable({
    providedIn: 'root',
})
export class RentalService {
    private rentals: Rental[] = [];

    getRentals(): Rental[] {
        return this.rentals;
      }      

    startRental(userId: number, car: Car, odoStart: number, startDate: Date): Rental {
        const newRental: Rental = {
            rentalId: Date.now(),
            userId,
            carId: car.id,
            startDate,
            odoStart
        };
        this.rentals.push(newRental);
        return newRental;
    }

    endRental(rentalId: number, odoEnd: number, endDate: Date, discount: number, loyaltyPointsDiscount: number): void {
        const rental = this.rentals.find(r => r.rentalId === rentalId);
        if (rental) {
            rental.odoEnd = odoEnd;
            rental.endDate = endDate;
            rental.totalCost = this.calculateRentalCost(rental, discount, loyaltyPointsDiscount);
        }
    }

    private calculateRentalCost(rental: Rental, discount: number, loyaltyPointsDiscount: number): number {
        const car = this.getCarById(rental.carId);
        if (!car || rental.odoEnd === undefined) return 0;

        const distance = rental.odoEnd - rental.odoStart;
        const baseCost = distance * car.pricePerKm;
        const tax = baseCost * car.taxRate;
        const duration = rental.endDate && rental.startDate ? Math.ceil((rental.endDate.getTime() - rental.startDate.getTime()) / (1000 * 3600 * 24)) : 1;
        const rentalDaysCost = duration * car.perDayCost;

        return baseCost + tax + rentalDaysCost - discount - loyaltyPointsDiscount;
    }

    constructor(private carService: CarService) { }

    private getCarById(carId: number): Car | undefined {
        return this.carService.getCars().find(car => car.id === carId);
    }

}
