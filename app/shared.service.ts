import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private city: string = '';
  private carname: string = '';
  private car1:string='';

  // Method to set both city and carname
  setCityAndCar(city: string, carname: string, car1:string): void {
    this.city = city;
    this.carname = carname;
    this.car1=car1;
  }

  // Method to get both city and carname
  getCityAndCar(): { city: string, carname: string, car1:string } {
    return { city: this.city, carname: this.carname, car1: this.car1 };
  }
}