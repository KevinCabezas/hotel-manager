import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import IErrorInput from '../../interfaces/error-input';

@Component({
  selector: 'app-error-input',
  imports: [],
  templateUrl: './error-input.html',
  styleUrl: './error-input.css',
})
export class ErrorInput {

  @Input() control!: AbstractControl;
  @Input() submitted = false;

  mensajes: any = {
    required: 'Campo requerido',
    email: 'Email inválido',
    minlength: 'Muy corto',
    iguales: 'Contreseña no coinciden',
    existe: 'Ya existe'
  }

  get errorKeys() {
    return Object.keys(this.control?.errors || {});
  }
}
