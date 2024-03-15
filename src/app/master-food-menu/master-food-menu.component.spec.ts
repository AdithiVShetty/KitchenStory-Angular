import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterFoodMenuComponent } from './master-food-menu.component';

describe('MasterFoodMenuComponent', () => {
  let component: MasterFoodMenuComponent;
  let fixture: ComponentFixture<MasterFoodMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterFoodMenuComponent]
    });
    fixture = TestBed.createComponent(MasterFoodMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
