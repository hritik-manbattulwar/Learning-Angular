import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTypesComponent } from './pipe-types.component';

describe('PipeTypesComponent', () => {
  let component: PipeTypesComponent;
  let fixture: ComponentFixture<PipeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
