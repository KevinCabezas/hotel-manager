import { Component, Input } from '@angular/core';
import { CardPortada } from '../../interfaces/card-portada';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  @Input() data!: CardPortada;
}
