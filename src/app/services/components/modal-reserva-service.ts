import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalReservaService {
  
  public mostrar = signal(false)

  show() {
    this.mostrar.set(true);
  }

  close() {
    this.mostrar.set(false);
  }
}
