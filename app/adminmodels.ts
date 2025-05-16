export interface Car {
    id: number;
    brand: string;
    model: string;
    type: string;
    pricePerKm: number;
    perDayCost: number;
    taxRate: number;
  }
  
  export interface Rental {
    rentalId: number;
    userId: number;
    carId: number;
    startDate: Date;
    endDate?: Date;
    odoStart: number;
    odoEnd?: number;
    totalCost?: number;
  }
  