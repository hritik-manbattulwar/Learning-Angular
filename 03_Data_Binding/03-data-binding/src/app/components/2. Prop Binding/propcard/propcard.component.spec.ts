import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropcardComponent } from './propcard.component';

describe('PropcardComponent', () => {
  let component: PropcardComponent;
  let fixture: ComponentFixture<PropcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
