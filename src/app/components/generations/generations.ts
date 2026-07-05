import { Component, Inject } from '@angular/core';
import { PokemonService } from '../../../services/pokemon-service';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.html',
  styleUrl: './generations.css',
})
export class Generations {
  public generations : Array<string>

  constructor(@Inject (PokemonService) private pokemonService: PokemonService) {
    this.generations = []
    this.getGeneration()
  }

  getGeneration(){
    this.generations = this.pokemonService.getAllGenerations()
  }
}
