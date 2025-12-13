import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, Input,  } from '@angular/core';
import { IHabitacion } from '../../interfaces/habitaciones';
import { ModalReservaService } from '../../services/components/modal-reserva-service';

@Component({
  selector: 'app-card-habitacion',
  imports: [],
  templateUrl: './card-habitacion.html',
  styleUrl: './card-habitacion.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class CardHabitacion {

  public modalService = inject(ModalReservaService);
  @Input() data!: IHabitacion;
}
