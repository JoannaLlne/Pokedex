import {Component, Inject} from '@angular/core';
import {PokemonService} from "../../services/pokemon-service";
import {Generation} from "../../components/models/generation";
import {UpperCasePipe} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [
    UpperCasePipe,
    HttpClientModule,
  ],
  providers: [PokemonService],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  public generations: Array<Generation>;

  constructor(@Inject(PokemonService) private pokemonService: PokemonService) {
    this.generations = [];
    this.getGenerations();
  }

  getGenerations(): void {
    this.pokemonService.getAllGenerations()
      .subscribe(data => this.generations = data);
  }

}
