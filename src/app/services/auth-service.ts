import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { IUsuario, IUsuarioAuth } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private spbService = inject(Supabase);
  private spdClient = this.spbService.client;



  public async crearCuenta(usuario: IUsuarioAuth) {
    const { data, error } = await this.spdClient.auth.signUp({
      email: usuario.email,
      password: usuario.contrasena,
      options: {
        data: {
          nombre: usuario.nombre,
          rol: usuario.rol
        }
      }
    });
    if (error) {
      throw error;
    }
    return data;
  }


  public async registroConGoogle() {
    console.log('entro')
    this.spdClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:4200/auth-google'
      }
    });
    console.log('siguio');
    const { data, error } = await this.spdClient.auth.getSession();

    if (data.session) {
      const user = data.session.user;
      console.log(user);
    }

  }
}
