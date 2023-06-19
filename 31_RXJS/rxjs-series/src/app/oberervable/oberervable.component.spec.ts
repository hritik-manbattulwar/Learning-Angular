import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OberervableComponent } from './oberervable.component';

describe('OberervableComponent', () => {
  let component: OberervableComponent;
  let fixture: ComponentFixture<OberervableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OberervableComponent]
    });
    fixture = TestBed.createComponent(OberervableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
