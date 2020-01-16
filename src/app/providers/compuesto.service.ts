import { CalculadoraService } from './calculadora.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompuestoService {

  constructor(public calculadora: CalculadoraService) {

  }

  pedirAlgo(){
    return this.calculadora.dimeAlgo();
  }
}
