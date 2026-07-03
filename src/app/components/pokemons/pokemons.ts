import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {

  public pokemons : Array<Pokemon>;

  constructor() {
    this.pokemons = []
    this.pokemons.push({id: 1, name : "Bulbizarre", type: ["Plante, Poison"], height: 70, weigth: 690})
    this.pokemons.push({id: 2, name : "Herbizarre", type: ["Plante, Poison"], height: 100, weigth: 1300})
    this.pokemons.push({id: 3, name : "Florizarre", type: ["Plante, Poison"], height: 200, weigth: 1600})
    this.pokemons.push({id: 4, name : "Salameche", type: ["Feu"], height: 60, weigth: 850})
    this.pokemons.push({id: 5, name : "Reptincel", type: ["Feu"], height: 110, weigth: 1900})
    this.pokemons.push({id: 6, name : "Dracaufeu", type: ["Feu, Vol"], height: 170, weigth: 9050})
  }
}
