import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Display } from './display.component';

describe('Display', () => {
  let component: Display;
  let fixture: ComponentFixture<Display>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Display ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
