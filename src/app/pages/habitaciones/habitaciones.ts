import { Component } from '@angular/core';
import { IHabitacion } from '../../interfaces/habitaciones';
import { CardHabitacion } from '../../components/card-habitacion/card-habitacion';

@Component({
  selector: 'app-habitaciones',
  imports: [CardHabitacion],
  templateUrl: './habitaciones.html',
  styleUrl: './habitaciones.css',
})
export class Habitaciones {

  protected habitaciones: IHabitacion[] = [
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    {titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
  ]
}
