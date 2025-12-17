import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  protected secciones = [
    {titulo: 'Inicio', path: '/inicio', icono: ''},
    // {titulo: 'Reservas', path: '/reservas', icono: ''},
    // {titulo: 'Habitaciónes', path: '/habitaciones', icono: 'habitaciones'},
    // {titulo: 'Contacto', path: '/login', icono: ''},
  ]
}
