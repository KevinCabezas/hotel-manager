import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators, } from '@angular/forms';
import { ErrorInput } from "../../components/error-input/error-input";
import { IUsuario, IUsuarioAuth } from '../../interfaces/usuario';
import { AuthService } from '../../services/auth-service';
import { DataBase } from '../../services/data-base';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-regitro',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
      apellido: new FormControl<string>('', {
        nonNullable: true, validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      }),

      email: new FormControl<string>('', {
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

    },
    { validators: this.validarContrasenias }
  )

  protected submitted = false;
  private authService = inject(AuthService);
  private dbService = inject(DataBase);

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
    console.log(this.formulario.value)
    this.registrarUsuarioAuth();
      // this.crearUsuario();

  }

  async registrarUsuarioAuth() {

    const usuarioAuth: IUsuarioAuth = {
      nombre: this.formulario.get('nombre')!.value,
      email: this.formulario.get('email')!.value,
      contrasena: this.formulario.get('contrasena')!.value,
      rol: 'usuario'
    }
    try {
      const response = await this.authService.crearCuenta(usuarioAuth);
      console.log(response);
      this.crearUsuario();

    } catch (error) {
      console.error('Error al crear usuario auth:', error);
    }
  }

  async crearUsuario() {
    const usuario: IUsuario = {
      nombre: this.formulario.get('nombre')!.value,
      apellido: this.formulario.get('apellido')!.value,
      email: this.formulario.get('email')!.value,
      rol: 'usuario'
    }

    try {
      const response = await this.dbService.crearUsuario(usuario);
      console.log(response);

    } catch (error) {
      console.error(error)
    }
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
