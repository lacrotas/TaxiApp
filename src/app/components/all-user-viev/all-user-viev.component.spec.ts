import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserVievComponent } from './all-user-viev.component';

describe('AllUserVievComponent', () => {
  let component: AllUserVievComponent;
  let fixture: ComponentFixture<AllUserVievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUserVievComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUserVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
