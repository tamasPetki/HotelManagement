import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickercomplexComponent } from './datepickercomplex.component';

describe('DatepickercomplexComponent', () => {
  let component: DatepickercomplexComponent;
  let fixture: ComponentFixture<DatepickercomplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickercomplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickercomplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
