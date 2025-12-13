import { TestBed } from '@angular/core/testing';

import { ModalReservaService } from './modal-reserva-service';

describe('ModalReservaService', () => {
  let service: ModalReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
