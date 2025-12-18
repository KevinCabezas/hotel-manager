import { Routes } from '@angular/router';
import { Habitaciones } from './pages/habitaciones/habitaciones';

export const routes: Routes = [
  {
    path: '', 
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio').then((a) => a.Inicio)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then((a) => a.Login)
  },
  {
    path: 'registro',
    loadComponent: () => import('./pages/registro/registro').then((a) => a.Registro)
  },
  {
    path: 'auth-google',
    loadComponent: () => import('./components/auth-callback/auth-callback').then((a) => a.AuthCallback)
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas').then((a) =>a.Reservas)
  },
  {
    path: 'habitaciones',
    loadComponent: () => import('./pages/habitaciones/habitaciones').then((a) => a.Habitaciones),
  }

];
