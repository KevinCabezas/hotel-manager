import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class DataBase {
  private spbService = inject(Supabase);


  async crearUsuario(usuario: IUsuario): Promise<IUsuario> {
    const { data, error } = await this.spbService.client
      .from('usuarios')
      .insert(usuario)
      .select();

    if (error) {
      console.log('Error Supabase:', error.message);
      throw error;
    }
    // console.log(data)
    return data[0];
  }

}
