import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraMockService {
  constructor() {
    console.log('Hello CalculadoraProvider Provider');
  }

  dimeAlgo() {
    return "falsario!";
  }
}
