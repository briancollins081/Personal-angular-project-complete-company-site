import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovCovidComponent } from './gov-covid.component';

describe('GovCovidComponent', () => {
  let component: GovCovidComponent;
  let fixture: ComponentFixture<GovCovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovCovidComponent ]
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
