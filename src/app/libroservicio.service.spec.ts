import { TestBed } from '@angular/core/testing';

import { LibroservicioService } from './services/libroservicio.service';

describe('LibroservicioService', () => {
  let service: LibroservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
