import { CalculadoraMockService } from './calculadora-mock.service';
import { CalculadoraService } from './calculadora.service';
import { TestBed } from '@angular/core/testing';

import { CompuestoService } from './compuesto.service';


// Como aplicar un mock 
// Se crea el servicio
let service: CompuestoService;
describe('CompuestoService', () => {
  let calcuMock;
  beforeEach(() => {
    calcuMock = new CalculadoraMockService();
    // Se configura para usar el mock
    TestBed.configureTestingModule({
      // Para probar usando objetos concretos
      // providers: [{ provide: CalculadoraService, useValue: calcuMock }]
      // Probar usando clases 
      providers: [{ provide: CalculadoraService, useClass: CalculadoraMockService }]
    });
    service = TestBed.get(CompuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('ya creado', () => {
    expect(service.pedirAlgo()).toEqual("falsario!");
  })
});
