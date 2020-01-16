import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() {
    console.log('Hello CalculadoraProvider Provider');
  }

  dimeAlgo() {
    return "corazon!";
  }

}
