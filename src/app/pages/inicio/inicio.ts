import { Component } from '@angular/core';
import { Card } from '../../components/card/card';
import { CardPortada } from '../../interfaces/card-portada';

@Component({
  selector: 'app-inicio',
  imports: [Card],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  protected cards:CardPortada[] = [
    { titulo: 'Habitaciones',  imagen: 'habitacion.webp', boton: 'Ver más', path: '/habitaciones'},
    { titulo: 'Reservas',  imagen: 'task.webp', boton: 'Saber más', path: '/reservas'},
    { titulo: 'Extras',  imagen: 'task.webp', boton: 'Saber más', path: ''},
   
  ]
}
