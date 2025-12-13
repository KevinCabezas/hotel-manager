import { inject, Injectable } from '@angular/core';
import { Supabase } from './supabase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private spbService = inject(Supabase);

  
}
