import { Component, CUSTOM_ELEMENTS_SCHEMA, Input,  } from '@angular/core';
import { IHabitacion } from '../../interfaces/habitaciones';

@Component({
  selector: 'app-card-habitacion',
  imports: [],
  templateUrl: './card-habitacion.html',
  styleUrl: './card-habitacion.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class CardHabitacion {

  @Input() data!: IHabitacion;
}
