import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurtherRentalsComponent } from './further-rentals.component';

describe('FurtherRentalsComponent', () => {
  let component: FurtherRentalsComponent;
  let fixture: ComponentFixture<FurtherRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurtherRentalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurtherRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
