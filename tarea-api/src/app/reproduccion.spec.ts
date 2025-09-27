import { TestBed } from '@angular/core/testing';

import { Reproduccion } from './reproduccion';

describe('Reproduccion', () => {
  let service: Reproduccion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reproduccion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
