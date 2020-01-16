import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

var veces = 1;
// el spec de un provider siempre lleva el beforeEach que es como el before de junit
// se va a ejecutar antes de cada it 
describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({})
    console.log("entrando aqui por ", veces++);
  });

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  // Con esto pruebo que beforeEach se ejecuta antes de cada it
  it('deberia ser la segunda', () => { });
  it('deberia ser la tercera', () => { });
  it('deberia ser la cuarta', () => { });
});
