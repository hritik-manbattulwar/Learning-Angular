import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleThrowErrorComponent } from './handle-throw-error.component';

describe('HandleThrowErrorComponent', () => {
  let component: HandleThrowErrorComponent;
  let fixture: ComponentFixture<HandleThrowErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandleThrowErrorComponent]
    });
    fixture = TestBed.createComponent(HandleThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
