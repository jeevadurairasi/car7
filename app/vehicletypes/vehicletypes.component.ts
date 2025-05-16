import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-vehicletypes',
  templateUrl: './vehicletypes.component.html',
  styleUrls: ['./vehicletypes.component.css']
})
export class VehicletypesComponent {
  locations: string[] = ["Banglore", "Chennai", "Hyderbad", "Mumbai"]; //for locations i have created array
  selectlocation: string = ''; 
  pickupdate: string = ''; //we need to type here yyyy-mm-dd format
  today: string = new Date().toISOString().split('T')[0]; //it will give current date
  returndate: string = '';

constructor( private router: Router, private sharedService: SharedService) {

}
formvalid() {
    return (this.selectlocation && this.pickupdate &&this.returndate && this.selectcategory );
  }

cars: any[] = [
    { name: 'SUV', category:'premier', Model: 2023, Luggage: '2 bags', milage: 30, photo: '/assets/Suv.jfif' },
    { name: 'Sedan',category:'economy', Model: 2022, Luggage: '6 bags', milage: 20, photo: '/assets/sedan.jpg' },
    { name: 'Hyundai',category:'economy', Model: 2021, Luggage: '3 bags', milage: 25, photo: '/assets/Hyundai.webp' },
    { name: 'Honda', category:'premier',Model: 2020, Luggage: '4 bags', milage: 35, photo: '/assets/honda.jfif' },
    { name: 'Force', category:'luxury',Model: 2016, Luggage: '6 bags', milage: 40, photo: '/assets/Tempo1.jpg' }
  ];
  

categories:string[]=['economy','premier','luxury'];

selectcategory:string='';
filteredcars:any[]=[];
selectedcars: any = this.cars[0];

oncategorychange() {
  
    this.filteredcars=this.cars.filter(car=>car.category==this.selectcategory);
    this.selectedcars=this.filteredcars[0];
  }
public selectcar(car: any) {
    this.selectedcars = car;
  }
    public booknow() {
    this.sharedService.setCityAndCar(this.selectlocation, this.selectedcars.name, this.selectcategory);
    // console.log('City and Car set in shared service:', this.selectlocation, this.selectedcars.name,this.selectcategory);
    this.router.navigate(['/carlist']);
  }
}