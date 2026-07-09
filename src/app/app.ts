import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsComponent } from './components/pokemons/pokemons';
import { GenerationsComponent } from './components/generations/generations';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonsComponent, GenerationsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pokedex');
}
