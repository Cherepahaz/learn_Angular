import { TestBed } from '@angular/core/testing';

import { MockApiCardService } from './mock-api-card.service';

describe('MockApiCardService', () => {
  let service: MockApiCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockApiCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
