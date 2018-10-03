import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsForSpecifiedDateComponent } from './rooms-for-specified-date.component';

describe('RoomsForSpecifiedDateComponent', () => {
  let component: RoomsForSpecifiedDateComponent;
  let fixture: ComponentFixture<RoomsForSpecifiedDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsForSpecifiedDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsForSpecifiedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
