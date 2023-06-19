import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchAppComponent } from './github-search-app.component';

describe('GithubSearchAppComponent', () => {
  let component: GithubSearchAppComponent;
  let fixture: ComponentFixture<GithubSearchAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubSearchAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
