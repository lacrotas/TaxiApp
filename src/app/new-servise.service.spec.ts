import { TestBed } from '@angular/core/testing';

import { NewServiseService } from './new-servise.service';

describe('NewServiseService', () => {
  let service: NewServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
