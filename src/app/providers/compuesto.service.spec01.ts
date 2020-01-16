import { CalculadoraService } from './calculadora.service';
import { TestBed } from '@angular/core/testing';

import { CompuestoService } from './compuesto.service';

//En este caso Compuesto necesita de calculadora por lo tanto tengo que inyectarlo
let service: CompuestoService;
describe('CompuestoService', () => {
  beforeEach(() => {
    // TestBed.configureTestingModule({
    // });
    // service=new CompuestoService(new CalculadoraService);
    service = TestBed.get(CompuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('en el segundo it',() => {
    expect(service.pedirAlgo()).toEqual('corazon!');
  })
});
