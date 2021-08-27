import { TestBed } from '@angular/core/testing';

import { EspanolService } from './espanol.service';

describe('EspanolService', () => {
  let service: EspanolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspanolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
