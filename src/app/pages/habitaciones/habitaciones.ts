import { Component, inject } from '@angular/core';
import { IHabitacion } from '../../interfaces/habitaciones';
import { CardHabitacion } from '../../components/card-habitacion/card-habitacion';
import { ModalReservaService } from '../../services/components/modal-reserva-service';
import { ModalReservar } from '../../components/modal-reservar/modal-reservar';

@Component({
  selector: 'app-habitaciones',
  imports: [CardHabitacion, ModalReservar],
  templateUrl: './habitaciones.html',
  styleUrl: './habitaciones.css',
})
export class Habitaciones {

  protected modalService = inject(ModalReservaService);

  protected habitaciones: IHabitacion[] = [
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
    { titulo: 'Algo', imagenes: ['habitacion.webp', 'task.webp'], descripcion: '', precio: 56, cantidad: 3 },
  ]
}
