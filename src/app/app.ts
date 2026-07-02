import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemons } from './components/pokemons/pokemons';
import { Generations } from './components/generations/generations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pokemons, Generations],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('pokedex');
}
