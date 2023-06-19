import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgcardComponent } from './msgcard.component';

describe('MsgcardComponent', () => {
  let component: MsgcardComponent;
  let fixture: ComponentFixture<MsgcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsgcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
