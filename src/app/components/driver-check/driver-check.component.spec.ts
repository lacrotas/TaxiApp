import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverCheckComponent } from './driver-check.component';

describe('DriverCheckComponent', () => {
  let component: DriverCheckComponent;
  let fixture: ComponentFixture<DriverCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
