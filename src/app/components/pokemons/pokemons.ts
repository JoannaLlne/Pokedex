import { Component, Inject } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.html',
  styleUrl: './pokemons.css',
})
export class Pokemons {

  public pokemons : Array<Pokemon>;

  constructor( @Inject(PokemonService) private pokemonService: PokemonService) {
    this.pokemons = []
   this.getPokemons()
  }

  getPokemons() {
    // Récupérer l'ensemble des pokemons
    this.pokemons = this.pokemonService.getAllPokemons()
  }
}
