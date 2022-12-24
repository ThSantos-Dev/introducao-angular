import { TestBed } from '@angular/core/testing';

import { ListAnimalsService } from './list-animals.service';

describe('ListAnimalsService', () => {
  let service: ListAnimalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAnimalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
