import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsChildCardComponent } from './forms-child-card.component';

describe('FormsChildCardComponent', () => {
  let component: FormsChildCardComponent;
  let fixture: ComponentFixture<FormsChildCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsChildCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsChildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
