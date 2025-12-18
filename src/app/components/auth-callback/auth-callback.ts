import { Component, inject, OnInit } from '@angular/core';
import { Supabase } from '../../services/supabase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  // standalone: true,
  imports: [],
  templateUrl: './auth-callback.html',
  styleUrl: './auth-callback.css',
})
export class AuthCallback implements OnInit{

  private spbService = inject(Supabase);
  private router = inject(Router);

  async ngOnInit() {
    const { data, error } = await this.spbService.client.auth.getSession();

    if (data.session) {
      this.router.navigate(['/inicio'])
    }
  }

}
