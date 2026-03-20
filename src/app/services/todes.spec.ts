import { TestBed } from '@angular/core/testing';

import { Todes } from './todes';

describe('Todes', () => {
  let service: Todes;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Todes);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
