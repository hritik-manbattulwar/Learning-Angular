import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbySelectorRadioComponent } from './hobby-selector-radio.component';

describe('HobbySelectorRadioComponent', () => {
  let component: HobbySelectorRadioComponent;
  let fixture: ComponentFixture<HobbySelectorRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbySelectorRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbySelectorRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
