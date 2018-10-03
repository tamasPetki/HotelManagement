import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListroomsfortodayComponent } from './listroomsfortoday.component';

describe('ListroomsfortodayComponent', () => {
  let component: ListroomsfortodayComponent;
  let fixture: ComponentFixture<ListroomsfortodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListroomsfortodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListroomsfortodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
