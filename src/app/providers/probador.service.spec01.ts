import { TestBed } from '@angular/core/testing';

import { ProbadorService } from './probador.service';

describe('ProbadorService', () => {
  let service;
  beforeAll(() => {
    service = TestBed.get(ProbadorService);
  })
  beforeEach(() => {
    // service = TestBed.get(ProbadorService);
  })

  it('should be created', () => {
    // Si existe el servicio
    console.log('valor antes', service.valor);
    service.valor++;
    expect(service).toBeTruthy();

  });
  it('probando las globales', () => {
    console.log('valor despues', service.valor);
    console.log('existe el service ', service);
    expect(service.compruebaTrue(true)).toBeFalsy();
  })
});
