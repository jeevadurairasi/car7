import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  companyName = "Carzy - Your Trusted Car Rental Partner";
  mission = "Carzy is committed to revolutionizing the car rental experience, providing hassle-free, reliable, and budget-friendly rental services.";
  vision = "To be the go-to car rental service worldwide, ensuring seamless journeys for every adventure.";
  
  whyChooseUs = [
    "Wide range of premium and budget-friendly cars.",
    "Flexible rental plans for daily, weekly, and monthly needs.",
    "24/7 customer support for assistance and queries.",
    "Transparent pricing with no hidden charges.",
    "Easy online booking and instant confirmation."
  ];

  testimonials = [
    { name: "Rahul Sharma", feedback: "Carzy made my trip smooth and stress-free. Highly recommended!" },
    { name: "Sarah Thompson", feedback: "Affordable pricing and well-maintained cars. Will definitely rent again!" },
    { name: "David Wilson", feedback: "Customer support was exceptional. I felt valued as a client." }
  ];
}