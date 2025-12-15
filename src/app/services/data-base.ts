import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';
import { IUsuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class DataBase {
  private spbService = inject(Supabase);


  async crearUsuario(usuario: IUsuario): Promise<any | null> {
    const { data, error } = await this.spbService.client
      .from('usuarios')
      .insert(usuario)
      .select();

    if (error) {
      console.log('Error al guardar usuario:', error.message);
      return null;
    }
    console.log(data)
    return data?.[0] || null
  }
  
}
