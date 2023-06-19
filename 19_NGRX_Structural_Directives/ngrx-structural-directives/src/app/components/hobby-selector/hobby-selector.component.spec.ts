import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbySelectorComponent } from './hobby-selector.component';

describe('HobbySelectorComponent', () => {
  let component: HobbySelectorComponent;
  let fixture: ComponentFixture<HobbySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
