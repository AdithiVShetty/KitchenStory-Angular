import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFoodItemComponent } from './delete-food-item.component';

describe('DeleteFoodItemComponent', () => {
  let component: DeleteFoodItemComponent;
  let fixture: ComponentFixture<DeleteFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteFoodItemComponent]
    });
    fixture = TestBed.createComponent(DeleteFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
