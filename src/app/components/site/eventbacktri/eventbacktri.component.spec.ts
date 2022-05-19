import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbacktriComponent } from './eventbacktri.component';

describe('EventbacktriComponent', () => {
  let component: EventbacktriComponent;
  let fixture: ComponentFixture<EventbacktriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventbacktriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbacktriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
