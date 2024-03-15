import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoodItemComponent } from './update-food-item.component';

describe('UpdateFoodItemComponent', () => {
  let component: UpdateFoodItemComponent;
  let fixture: ComponentFixture<UpdateFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFoodItemComponent]
    });
    fixture = TestBed.createComponent(UpdateFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
