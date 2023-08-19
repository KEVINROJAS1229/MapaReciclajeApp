import { TestBed } from '@angular/core/testing';

import { PuntosReciclajeService } from './puntos-reciclaje.service';

describe('PuntosReciclajeService', () => {
  let service: PuntosReciclajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuntosReciclajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
