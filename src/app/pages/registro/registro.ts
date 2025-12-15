import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators, } from '@angular/forms';

@Component({
  selector: 'app-regitro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

  formulario = new FormGroup( 
    {
      nombre: new FormControl<string>('', {
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      }),
      apellido: new FormControl<string>('',{
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      }),

      mail: new FormControl<string>('',{
        nonNullable: true, validators: [
          Validators.required,
          Validators.email
        ]
      }),
      contrasena: new FormControl<string>('', {
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      }),
      repetir: new FormControl<string>('', {
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(8)
        ]
      })

    }

  )

  protected submitted = false;
  get f() {
    return this.formulario.controls;
  }

  enviarFormulario() {
    this.submitted = true;
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      console.log('form invalido')
      return;
    }
    console.log(this.formulario)

  }

   validarContrasenias(group: AbstractControl): ValidationErrors | null {
    const contrasenia = group.get('contrasena')?.value;
    const repetir = group.get('repetir')?.value;

    if (!contrasenia || !repetir) return null;
    if (contrasenia !== repetir) {
      console.log('iguales')
      // this.formulario.patchValue({contrasena: ''});

      return { iguales: true };
    }

    return null;
  }
}
