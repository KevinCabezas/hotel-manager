import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class DataBase {
  private spbService = inject(Supabase);
  
}
