import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsParentCardComponent } from './forms-parent-card.component';

describe('FormsParentCardComponent', () => {
  let component: FormsParentCardComponent;
  let fixture: ComponentFixture<FormsParentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsParentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsParentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
