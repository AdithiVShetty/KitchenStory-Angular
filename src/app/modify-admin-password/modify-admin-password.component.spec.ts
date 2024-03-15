import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAdminPasswordComponent } from './modify-admin-password.component';

describe('ModifyAdminPasswordComponent', () => {
  let component: ModifyAdminPasswordComponent;
  let fixture: ComponentFixture<ModifyAdminPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyAdminPasswordComponent]
    });
    fixture = TestBed.createComponent(ModifyAdminPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
