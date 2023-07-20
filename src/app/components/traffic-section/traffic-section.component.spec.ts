import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficSectionComponent } from './traffic-section.component';

describe('TrafficSectionComponent', () => {
  let component: TrafficSectionComponent;
  let fixture: ComponentFixture<TrafficSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrafficSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
