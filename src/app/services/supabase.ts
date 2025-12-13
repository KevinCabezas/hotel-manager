import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class Supabase {
  private url = 'https://rngljmpkfijpjtuafebn.supabase.co';
  private key = 'sb_publishable_78LUhFAjNzzFDwITdn1E2A_HJKUPd1W'
  public client: SupabaseClient;

  constructor() {
    this.client = createClient(this.url, this.key);
  }
}
