import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousRentalsComponent } from './previous-rentals.component';

describe('PreviousRentalsComponent', () => {
  let component: PreviousRentalsComponent;
  let fixture: ComponentFixture<PreviousRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousRentalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
