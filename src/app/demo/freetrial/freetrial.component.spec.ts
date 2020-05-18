import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetrialComponent } from './freetrial.component';

describe('FreetrialComponent', () => {
  let component: FreetrialComponent;
  let fixture: ComponentFixture<FreetrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreetrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
