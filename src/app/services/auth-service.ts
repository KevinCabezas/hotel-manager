import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private spbService = inject(Supabase);
  private supabase = this.spbService.client;
  

  async crearCuenta(usuario: IUsuario, ) {
    const { data, error } = await this.supabase.auth.signUp({
      email: usuario.email,
      password: usuario.contrasena,
      options: {
        data: { nombre: usuario.nombre}
      }
    });
  }
  
}
