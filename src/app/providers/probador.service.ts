import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProbadorService {
  valor = 0;
  constructor() {
    console.log('Hello ProbadorProvider Provider');
  }

  public compruebaTrue(valor: boolean): boolean {
    return false;
  }

  public compruebaPar(valor: number): boolean {
    return valor % 2 === 0;
  }
}
