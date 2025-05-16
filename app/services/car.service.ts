import { Injectable } from "@angular/core";
import { Car } from "../adminmodels";

@Injectable({
    providedIn: 'root',
  })
  export class CarService {
    private cars: Car[] = [];
  
    getCars(): Car[] {
      return this.cars;
    }
  
    addCar(car: Car): void {
      this.cars.push(car);
    }
  
    updateCar(carId: number, updatedCar: Car): void {
      const index = this.cars.findIndex(car => car.id === carId);
      if (index !== -1) this.cars[index] = updatedCar;
    }
  
    deleteCar(carId: number): void {
      this.cars = this.cars.filter(car => car.id !== carId);
    }
  }
  