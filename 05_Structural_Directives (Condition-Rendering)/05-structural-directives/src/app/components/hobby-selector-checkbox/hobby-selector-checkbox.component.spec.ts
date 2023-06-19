import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbySelectorCheckboxComponent } from './hobby-selector-checkbox.component';

describe('HobbySelectorCheckboxComponent', () => {
  let component: HobbySelectorCheckboxComponent;
  let fixture: ComponentFixture<HobbySelectorCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbySelectorCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbySelectorCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
