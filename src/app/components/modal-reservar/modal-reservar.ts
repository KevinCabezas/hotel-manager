import { Component, inject } from '@angular/core';
import { ModalReservaService } from '../../services/components/modal-reserva-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-reservar',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-reservar.html',
  styleUrl: './modal-reservar.css',
})
export class ModalReservar {

  protected modalService = inject(ModalReservaService);
  protected submitted = false;
  formulario = new FormGroup(
    {
      fecha: new FormControl('', {
        validators: [
          Validators.required,
        ]
      }),

      noches: new FormControl<number | null>(null, {
        nonNullable: false,
        validators: [
          Validators.required,
          Validators.max(5),
          Validators.min(2)
        ]
      })
    }
  )

  get f() {
    return this.formulario.controls;
  }

  async enviarFormulario() {
    this.submitted = true;
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
    console.log('no')

      return;
    }

    console.log('formvalido:', this.formulario)
  }
}
